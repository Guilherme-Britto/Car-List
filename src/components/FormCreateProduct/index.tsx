import { SubmitButton } from '../../styles/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../Input';
import { useContext } from 'react';
import { ProductsContext } from '../../providers/ProductsContext/ProductsContext';
import { ICreateProductFormValues } from '../../providers/ProductsContext/@types';
import { useOutclick } from '../../hooks/useOutclick';

export const FormCreateProduct = () => {
  const { register, handleSubmit } = useForm<ICreateProductFormValues>();

  const { productsCreate, SetCreatingProductModal } =
    useContext(ProductsContext);

  const submit: SubmitHandler<ICreateProductFormValues> = (formData) => {
    productsCreate(formData);
  };

  const ref = useOutclick<HTMLFormElement>(() =>
    SetCreatingProductModal(false)
  );

  return (
    <form ref={ref} onSubmit={handleSubmit(submit)}>
      <div className='modalHeader'>
        <h2 className='weigth700 '>Cadastrar Produto</h2>
        <button
          className='colorgrey1 weigth600 closeButton'
          type='button'
          onClick={() => SetCreatingProductModal(false)}
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
      <Input
        id={'ano'}
        placeholder={'Ano...'}
        label={'Ano:'}
        {...register('ano')}
      />
      <Input
        id={'modelo'}
        placeholder={'Modelo...'}
        label={'Modelo:'}
        {...register('modelo_id')}
      />
      <Input
        id={'combustivel'}
        placeholder={'Combustível...'}
        label={'Combustível:'}
        {...register('combustivel')}
      />
      <Input
        id={'brand'}
        placeholder={'Marca...'}
        label={'Marca:'}
        {...register('brand')}
      />
      <Input
        id={'num_portas'}
        placeholder={'Número de portas...'}
        label={'Número de portas:'}
        {...register('num_portas')}
      />
      <Input
        id={'modelo_id'}
        placeholder={'Número de modelo...'}
        label={'Número de modelo:'}
        {...register('modelo_id')}
      />
      <Input
        id={'valor'}
        placeholder={'Valor...'}
        label={'Valor:'}
        {...register('valor')}
      />

      <SubmitButton className='submitButtonCreate' type='submit'>
        Cadastrar Produto
      </SubmitButton>
    </form>
  );
};
