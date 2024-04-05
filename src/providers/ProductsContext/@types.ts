export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IProduct {
  code: string;
  description: string;
  price: string;
  created_at: Date;
}

export type ICreateProductFormValues = Omit<
  IProduct,
  'code' | 'created_at' | 'updated_at'
>;

export type IUpdateProductFormValues = Omit<
  IProduct,
  'code' | 'created_at' | 'updated_at'
>;

export interface IProductContext {
  products: IProduct[];
  productsCreate: (formData: IProduct) => void;
  creatingProductModal: boolean;
  SetCreatingProductModal: React.Dispatch<React.SetStateAction<boolean>>;
}
