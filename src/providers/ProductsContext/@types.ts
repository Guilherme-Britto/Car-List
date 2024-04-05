export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IProduct {
  id: number;
  timestamp_cadastro: number;
  modelo_id: number;
  ano: number;
  combustivel: string;
  num_portas: number;
  cor: string;
  nome_modelo: string;
  valor: number;
}

export type ICreateProductFormValues = Omit<
  IProduct,
  'id' | 'timestamp_cadastro'
>;

export interface IProductContext {
  products: IProduct[];
  productsCreate: (formData: IProduct) => void;
  creatingProductModal: boolean;
  SetCreatingProductModal: React.Dispatch<React.SetStateAction<boolean>>;
}
