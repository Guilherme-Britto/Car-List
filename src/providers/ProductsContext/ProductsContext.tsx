import { createContext, useEffect, useState } from 'react';
import { IProductContext, IProduct, IDefaultProviderProps } from './@types';
import data from '../../assets/carList.json';

export const ProductsContext = createContext({} as IProductContext);

export const ProductsProvider = ({ children }: IDefaultProviderProps) => {
  const [products, SetProducts] = useState<any>([]);
  const [activeBrand, SetActiveBrand] = useState(false);
  const [creatingProductModal, SetCreatingProductModal] = useState(false);

  const productsList = async () => {
    console.log(data.cars);

    SetCreatingProductModal(false);
    SetProducts(data.cars);
  };

  const productsCreate = (formData: IProduct) => {
    SetCreatingProductModal(false);
    SetProducts([...products, formData]);
    console.log(products);
  };

  useEffect(() => {
    productsList();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        productsCreate,
        products,
        creatingProductModal,
        SetCreatingProductModal,
        activeBrand,
        SetActiveBrand,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
