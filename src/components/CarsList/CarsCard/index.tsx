import { useContext } from 'react';
import { ICar } from '../../../providers/CarsContext/@types';
import { CarsContext } from '../../../providers/CarsContext/CarsContext';

interface ICarsCardProps {
  car: ICar;
}

export const CarsCard = ({ car }: ICarsCardProps) => {
  const { SetExpandInfoModal, SetExpandInfo, SetCreatingCarModal } =
    useContext(CarsContext);

  return (
    <li
      onClick={() => (
        SetExpandInfo(car),
        SetExpandInfoModal(true),
        SetCreatingCarModal(false)
      )}
    >
      <p className='colorPrimaryFocus'>
        {car.nome_modelo} - {car.ano}
      </p>
      <h3>{car.valor} mil </h3>
    </li>
  );
};
