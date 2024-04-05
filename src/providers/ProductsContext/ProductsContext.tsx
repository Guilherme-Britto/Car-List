import { createContext, useEffect, useState } from 'react';
import { IProductContext, IProduct, IDefaultProviderProps } from './@types';
export const ProductsContext = createContext({} as IProductContext);

export const ProductsProvider = ({ children }: IDefaultProviderProps) => {
  const [products, SetProducts] = useState<any>([]);
  const [creatingProductModal, SetCreatingProductModal] = useState(false);

  const productsList = async () => {
    SetCreatingProductModal(false);
    SetProducts(carList);
  };

  const productsCreate = (formData: IProduct) => {
    SetCreatingProductModal(false);
    SetProducts([...products, formData]);
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
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
