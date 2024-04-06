import { createContext, useEffect, useState } from 'react';
import {
  ICarContext,
  ICar,
  IDefaultProviderProps,
  ICreateCarFormValues,
} from './@types';
import data from '../../assets/carList.json';

export const CarsContext = createContext({} as ICarContext);

export const CarsProvider = ({ children }: IDefaultProviderProps) => {
  const [cars, SetCars] = useState<ICar[]>([]);
  const [activeBrand, SetActiveBrand] = useState(0);
  const [creatingCarModal, SetCreatingCarModal] = useState(false);
  const [expandInfoModal, SetExpandInfoModal] = useState(false);
  const [expandInfo, SetExpandInfo] = useState<ICar>();

  const carsList = async () => {
    SetCreatingCarModal(false);
    SetCars(data.cars);
  };

  const carsCreate = (formData: ICreateCarFormValues) => {
    SetCreatingCarModal(false);
    const updatedFormData = {
      ...formData,
      id: cars[cars.length - 1].id + 1,
      timestamp_cadastro: Date.now(),
    };
    SetCars([...cars, updatedFormData]);
  };

  useEffect(() => {
    carsList();
  }, []);

  return (
    <CarsContext.Provider
      value={{
        carsCreate,
        cars,
        creatingCarModal,
        SetCreatingCarModal,
        activeBrand,
        SetActiveBrand,
        expandInfoModal,
        SetExpandInfoModal,
        expandInfo,
        SetExpandInfo,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};
