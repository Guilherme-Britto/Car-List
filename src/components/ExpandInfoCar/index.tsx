import { useContext } from 'react';
import { CarsContext } from '../../providers/CarsContext/CarsContext';
import { useOutclick } from '../../hooks/useOutclick';

export const ExpandCarInfo = () => {
  const { SetExpandInfoModal, expandInfo } = useContext(CarsContext);

  const ref = useOutclick<HTMLFormElement>(() => SetExpandInfoModal(false));

  return (
    <form ref={ref}>
      <div className='modalHeader'>
        <h2 className='weigth700 '>Detalhes do Carro</h2>
        <button
          className='colorgrey0 weigth400'
          type='button'
          onClick={() => SetExpandInfoModal(false)}
        >
          X
        </button>
      </div>
      <p className='projectNameLabel'>Nome:</p>
      <p className='projectName'>{expandInfo?.nome_modelo}</p>
      <p className='projectNameLabel'>Combustível:</p>
      <p className='projectName'>{expandInfo?.combustivel}</p>
      <p className='projectNameLabel'>Número de portas:</p>
      <p className='projectName'>{expandInfo?.num_portas}</p>
      <p className='projectNameLabel'>Cor:</p>
      <p className='projectName'>{expandInfo?.cor}</p>
      <p className='projectNameLabel'>valor:</p>
      <p className='projectName'>{expandInfo?.valor} mil</p>
      <p className='projectNameLabel'>Ano:</p>
      <p className='projectName'>{expandInfo?.ano}</p>
    </form>
  );
};
