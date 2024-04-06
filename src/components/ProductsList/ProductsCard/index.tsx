import { useContext } from 'react';
import { IProduct } from '../../../providers/ProductsContext/@types';
import { ProductsContext } from '../../../providers/ProductsContext/ProductsContext';

interface IProductsCardProps {
  product: IProduct;
}

export const ProductsCard = ({ product }: IProductsCardProps) => {
  const { SetExpandInfoModal, SetExpandInfo, SetCreatingProductModal } =
    useContext(ProductsContext);

  return (
    <li
      onClick={() => (
        SetExpandInfo(product),
        SetExpandInfoModal(true),
        SetCreatingProductModal(false)
      )}
    >
      <p className='colorPrimaryFocus'>
        {product.nome_modelo} - {product.ano}
      </p>
      <h3>{product.valor} mil </h3>
    </li>
  );
};
