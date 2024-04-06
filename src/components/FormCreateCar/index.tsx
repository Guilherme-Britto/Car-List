import { SubmitButton } from '../../styles/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';
import { useContext } from 'react';
import { CarsContext } from '../../providers/CarsContext/CarsContext';
import { ICreateCarFormValues } from '../../providers/CarsContext/@types';
import { useOutclick } from '../../hooks/useOutclick';

export const FormCreateCar = () => {
  const { register, handleSubmit } = useForm<ICreateCarFormValues>();

  const { carsCreate, SetCreatingCarModal } = useContext(CarsContext);

  const submit: SubmitHandler<ICreateCarFormValues> = (formData) => {
    if (
      formData.ano &&
      formData.brand &&
      formData.combustivel &&
      formData.cor &&
      formData.modelo_id &&
      formData.nome_modelo &&
      formData.num_portas &&
      formData.valor
    ) {
      if (typeof formData.brand === 'string') {
        const brandNumber = parseFloat(formData.brand);
        carsCreate({ ...formData, brand: brandNumber });
      }
    }
  };

  const ref = useOutclick<HTMLFormElement>(() => SetCreatingCarModal(false));

  const anos = Array.from(
    { length: new Date().getFullYear() - 2005 + 1 },
    (_, index) => new Date().getFullYear() - index
  );

  return (
    <form ref={ref} onSubmit={handleSubmit(submit)}>
      <div className='modalHeader'>
        <h2 className='weigth700 '>Cadastrar Carro</h2>
        <button
          className='colorgrey1 weigth600 closeButton'
          type='button'
          onClick={() => SetCreatingCarModal(false)}
        >
          X
        </button>
      </div>
      <Input
        id={'nome'}
        placeholder={'Nome...'}
        label={'Nome:'}
        {...register('nome_modelo')}
      />

      <div className='input__container'>
        <label className='colorgrey0 weigth400' htmlFor='ano'>
          Selecionar ano:
        </label>
        <select id='ano' {...register('ano')}>
          <option hidden value=''>
            Selecione o ano
          </option>
          {anos.map((ano) => (
            <option key={ano} value={ano}>
              {ano}
            </option>
          ))}
        </select>
      </div>
      <Input
        id={'combustivel'}
        placeholder={'Combustível...'}
        label={'Combustível:'}
        {...register('combustivel')}
      />
      <div className='input__container'>
        <label className='colorgrey0 weigth400' htmlFor='brand'>
          Selecionar a marca:
        </label>
        <select id='brand' {...register('brand')}>
          <option hidden value=''>
            Selecione a marca
          </option>
          <option value='1'>Toyota</option>
          <option value='2'>Chevrolet</option>
          <option value='3'>Volkswagen</option>
          <option value='4'>Ford</option>
        </select>
      </div>
      <Input
        id={'cor'}
        placeholder={'Cor...'}
        label={'Cor:'}
        {...register('cor')}
      />
      <Input
        id={'num_portas'}
        placeholder={'Número de portas...'}
        label={'Número de portas:'}
        {...register('num_portas')}
      />
      <Input
        id={'valor'}
        placeholder={'Preço...'}
        label={'Preço em mil reais:'}
        {...register('valor')}
      />
      <Input
        id={'modelo'}
        placeholder={'Modelo...'}
        label={'Modelo:'}
        {...register('modelo_id')}
      />

      <SubmitButton className='submitButtonCreate' type='submit'>
        Cadastrar Carro
      </SubmitButton>
    </form>
  );
};
