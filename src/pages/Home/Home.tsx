import { HomeMain, ProductInfo } from './style';
import { useContext } from 'react';
import { FormCreateProduct } from '../../components/FormCreateProduct';
import { ProductsContext } from '../../providers/ProductsContext/ProductsContext';
import { ProductsList } from '../../components/ProductsList';
import { Modal } from '../../styles/styles';
import { BrandList } from '../../components/BrandList';
import { ExpandProductInfo } from '../../components/ExpandInfoProduct';

const Home = () => {
  const {
    creatingProductModal,
    SetCreatingProductModal,
    expandInfoModal,
    SetExpandInfoModal,
    activeBrand,
    SetActiveBrand,
  } = useContext(ProductsContext);

  return (
    <HomeMain>
      <header>
        <h1>Lista de Carros</h1>
      </header>
      <ProductInfo>
        <section className='productInfoHeader'>
          {activeBrand === 0 ? (
            <h2 className='colorgrey0 weigth700'>Marcas</h2>
          ) : (
            <span onClick={() => SetActiveBrand(0)}>Voltar para Marcas</span>
          )}

          <button
            className='colorgrey0 weigth700'
            onClick={() => {
              SetCreatingProductModal(true), SetExpandInfoModal(false);
            }}
          >
            +
          </button>
        </section>
        {activeBrand === 0 ? <BrandList /> : <ProductsList />}
        <Modal>
          <div className='modalDiv'>
            {creatingProductModal && <FormCreateProduct />}
          </div>
        </Modal>
        <Modal>
          <div className='modalDiv'>
            {expandInfoModal && <ExpandProductInfo />}
          </div>
        </Modal>
      </ProductInfo>
    </HomeMain>
  );
};

export default Home;
