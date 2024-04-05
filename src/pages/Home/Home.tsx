import { HomeMain, ProductInfo } from './style';
import { useContext } from 'react';
import { FormCreateProduct } from '../../components/FormCreateProduct';
import { ProductsContext } from '../../providers/ProductsContext/ProductsContext';
import { ProductsList } from '../../components/ProductsList';
import { Modal } from '../../styles/styles';
import { BrandList } from '../../components/BrandList';

const Home = () => {
  const { creatingProductModal, SetCreatingProductModal } =
    useContext(ProductsContext);

  return (
    <HomeMain>
      <header>
        <h1>Lista de Carros</h1>
      </header>
      <ProductInfo>
        <section className='productInfoHeader'>
          <h2 className='colorgrey0 weigth700'>Marcas</h2>
          <button
            className='colorgrey0 weigth700'
            onClick={() => SetCreatingProductModal(true)}
          >
            +
          </button>
        </section>
        <BrandList />
        <Modal>
          <div className='modalDiv'>
            {creatingProductModal && <FormCreateProduct />}
          </div>
        </Modal>
      </ProductInfo>
    </HomeMain>
  );
};

export default Home;
