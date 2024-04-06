import { useContext } from 'react';
import { Ul } from '../../styles/styles';
import { ProductsCard } from './ProductsCard';
import { ProductsContext } from '../../providers/ProductsContext/ProductsContext';

export const ProductsList = () => {
  const { products, activeBrand } = useContext(ProductsContext);
  const filteredProducts = products.filter(
    (product) => product.brand === activeBrand
  );
  return (
    <>
      {products.length == 0 ? (
        <p>Nenhum produto adicíonado.</p>
      ) : (
        <Ul>
          {filteredProducts.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </Ul>
      )}
    </>
  );
};
