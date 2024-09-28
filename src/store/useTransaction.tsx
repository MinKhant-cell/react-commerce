import { create } from 'zustand'

const useTransaction = create((set) => ({
    transactions: [
        {
          id: 1,
          type: 'deposit',
          amount: 500,
          date: '2024-09-27T10:00:00Z',
          description: 'Initial deposit',
        },
        {
          id: 2,
          type: 'withdrawal',
          amount: 100,
          date: '2024-09-28T15:30:00Z',
          description: 'Grocery shopping',
        },
        {
          id: 3,
          type: 'deposit',
          amount: 300,
          date: '2024-09-29T11:45:00Z',
          description: 'Salary credit',
        },
        {
          id: 4,
          type: 'withdrawal',
          amount: 50,
          date: '2024-09-30T18:20:00Z',
          description: 'Dinner at restaurant',
        },
        {
          id: 5,
          type: 'deposit',
          amount: 200,
          date: '2024-10-01T09:10:00Z',
          description: 'Freelance work payment',
        },
      ],
}))

export default useTransaction