import { useContext } from 'react';
import { Ul } from '../../styles/styles';
import { CarsCard } from './CarsCard';
import { CarsContext } from '../../providers/CarsContext/CarsContext';

export const CarsList = () => {
  const { cars, activeBrand } = useContext(CarsContext);
  const filteredCars = cars.filter((car) => car.brand === activeBrand);
  return (
    <>
      <Ul>
        {filteredCars.map((car) => (
          <CarsCard key={car.id} car={car} />
        ))}
      </Ul>
    </>
  );
};
