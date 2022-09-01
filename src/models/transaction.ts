export interface Transaction {
  id: number;
  title: string;
  type: string,
  category: string,
  amount: number,
  createdAt: string,
}

export type TransactionInput = Omit<Transaction, 'id' | 'createdAt'> 

export interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}