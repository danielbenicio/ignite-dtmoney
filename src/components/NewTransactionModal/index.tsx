import React, { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';

import {
  Container,
  TransactionTypeContainer,
  RadioBox,
} from './styles';

import closeImg from  '../../assets/close.svg';
import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';

import { TransactionsContext } from '../../TransactionsContext';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({isOpen, onRequestClose}) => {
  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState<string>('');
  const [value, setValue] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [transactionType, setTransactionType] = useState('deposit');

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();

    createTransaction({
      title,
      amount: value,
      category,
      type: transactionType,
    })
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button 
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImg} alt='Fechar modal'/>
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input 
          type="text"
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />
        <TransactionTypeContainer>
            <RadioBox 
              type='button'
              onClick={() => { setTransactionType('deposit'); }}
              isActive={transactionType === 'deposit'}
              activeColor='green'
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox 
              type='button'
              onClick={() => { setTransactionType('withdraw'); }}
              isActive={transactionType === 'withdraw'}
              activeColor='red'
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
        </TransactionTypeContainer>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}
