import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from './services/api';

import { Transaction } from './models/transaction';
import { TransactionInput } from './models/transaction';
import { TransactionContextData } from './models/transaction';

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
);

interface TransactionsProviderProps {
  children: ReactNode;
};

export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
   api.get('transactions')  
     .then(response => setTransactions(response.data.transactions))
  }, []);

  const createTransaction = (transaction: TransactionInput) => {
    api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}

