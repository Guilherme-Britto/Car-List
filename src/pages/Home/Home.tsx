import { HomeMain, CarInfo } from './style';
import { useContext } from 'react';
import { FormCreateCar } from '../../components/FormCreateCar';
import { CarsContext } from '../../providers/CarsContext/CarsContext';
import { CarsList } from '../../components/CarsList';
import { Modal } from '../../styles/styles';
import { BrandList } from '../../components/BrandList';
import { ExpandCarInfo } from '../../components/ExpandInfoCar';

const Home = () => {
  const {
    creatingCarModal,
    SetCreatingCarModal,
    expandInfoModal,
    SetExpandInfoModal,
    activeBrand,
    SetActiveBrand,
  } = useContext(CarsContext);

  return (
    <HomeMain>
      <header>
        <h1>Lista de Carros</h1>
      </header>
      <CarInfo>
        <section className='carInfoHeader'>
          {activeBrand === 0 ? (
            <h2 className='colorgrey0 weigth700'>Marcas</h2>
          ) : (
            <span onClick={() => SetActiveBrand(0)}>Voltar para Marcas</span>
          )}

          <button
            className='colorgrey0 weigth700'
            onClick={() => {
              SetCreatingCarModal(true), SetExpandInfoModal(false);
            }}
          >
            +
          </button>
        </section>
        {activeBrand === 0 ? <BrandList /> : <CarsList />}
        <Modal>
          <div className='modalDiv'>
            {creatingCarModal && <FormCreateCar />}
          </div>
        </Modal>
        <Modal>
          <div className='modalDiv'>
            {expandInfoModal && <ExpandCarInfo />}
          </div>
        </Modal>
      </CarInfo>
    </HomeMain>
  );
};

export default Home;
