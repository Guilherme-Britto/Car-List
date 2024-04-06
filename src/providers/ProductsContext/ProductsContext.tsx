import { createContext, useEffect, useState } from 'react';
import {
  IProductContext,
  IProduct,
  IDefaultProviderProps,
  ICreateProductFormValues,
} from './@types';
import data from '../../assets/carList.json';

export const ProductsContext = createContext({} as IProductContext);

export const ProductsProvider = ({ children }: IDefaultProviderProps) => {
  const [products, SetProducts] = useState<IProduct[]>([]);
  const [activeBrand, SetActiveBrand] = useState(0);
  const [creatingProductModal, SetCreatingProductModal] = useState(false);
  const [expandInfoModal, SetExpandInfoModal] = useState(false);
  const [expandInfo, SetExpandInfo] = useState<IProduct>();

  const productsList = async () => {
    console.log(data.cars);

    SetCreatingProductModal(false);
    SetProducts(data.cars);
  };

  const productsCreate = (formData: ICreateProductFormValues) => {
    SetCreatingProductModal(false);
    const updatedFormData = {
      ...formData,
      id: products[products.length - 1].id + 1,
      timestamp_cadastro: Date.now(),
    };
    SetProducts([...products, updatedFormData]);
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
        expandInfoModal,
        SetExpandInfoModal,
        expandInfo,
        SetExpandInfo,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
