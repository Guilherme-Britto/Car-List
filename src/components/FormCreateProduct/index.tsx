import { SubmitButton } from '../../styles/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
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
    console.log(formData);

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
        console.log(brandNumber);
        productsCreate({ ...formData, brand: brandNumber });
      }
    }
  };

  const ref = useOutclick<HTMLFormElement>(() =>
    SetCreatingProductModal(false)
  );

  const anos = Array.from(
    { length: new Date().getFullYear() - 2005 + 1 },
    (_, index) => new Date().getFullYear() - index
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
        Cadastrar Produto
      </SubmitButton>
    </form>
  );
};
