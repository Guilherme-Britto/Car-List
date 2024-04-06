import { IDefaultProviderProps } from './CarsContext/@types';
import { CarsProvider } from './CarsContext/CarsContext';

const Providers = ({ children }: IDefaultProviderProps) => {
  return <CarsProvider>{children}</CarsProvider>;
};

export default Providers;
