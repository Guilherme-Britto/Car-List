import { useContext } from 'react';
import { Ul } from './style';
import { ProductsContext } from '../../providers/ProductsContext/ProductsContext';

export const BrandList = () => {
  const { SetActiveBrand } = useContext(ProductsContext);
  return (
    <>
      <Ul>
        <li>
          <img
            onClick={() => SetActiveBrand(1)}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMu1cLIiNia74ji4NhpExhZwS8CTWSr8rUwezuK8mx_A&s'
            alt='Toyota'
          />
        </li>
        <li>
          <img
            onClick={() => SetActiveBrand(2)}
            src='https://www.shutterstock.com/image-vector/vinnytsia-ukraine-november-6-2023-600nw-2384682643.jpg'
            alt='Chevrolet'
          />
        </li>
        <li>
          <img
            onClick={() => SetActiveBrand(3)}
            src='https://i.pinimg.com/474x/58/68/4c/58684cd256ede9c1e6e7c31f3386cbb5.jpg'
            alt='Volkswagen'
          />
        </li>
        <li>
          <img
            onClick={() => SetActiveBrand(4)}
            src='https://www.putco.com/wp-content/uploads/Ford-Super-Duty-F250-F350-Ford-Oval-Alminum-Black-Emeblem-by-Putco-Inc.-Part-92300F-1.jpg'
            alt='Ford'
          />
        </li>
      </Ul>
    </>
  );
};
