export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface ICar {
  id: number;
  timestamp_cadastro: number;
  modelo_id: number;
  ano: number;
  combustivel: string;
  num_portas: number;
  cor: string;
  nome_modelo: string;
  valor: number;
  brand: number | string;
}

export type ICreateCarFormValues = Omit<ICar, 'id' | 'timestamp_cadastro'>;

export interface ICarContext {
  cars: ICar[];
  carsCreate: (formData: ICreateCarFormValues) => void;
  creatingCarModal: boolean;
  SetCreatingCarModal: React.Dispatch<React.SetStateAction<boolean>>;
  activeBrand: number;
  SetActiveBrand: React.Dispatch<React.SetStateAction<number>>;
  expandInfoModal: boolean;
  SetExpandInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
  expandInfo: ICar | undefined;
  SetExpandInfo: React.Dispatch<React.SetStateAction<ICar | undefined>>;
}
