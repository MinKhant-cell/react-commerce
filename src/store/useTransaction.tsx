import { create } from 'zustand'

const useTransaction = create((set) => ({
    transactions: [
        {
          id: 1,
          type: 1,
          amount: 500,
          date: '2024-09-27T10:00:00Z',
          description: 'Initial deposit',
        },
        {
          id: 2,
          type: 2,
          amount: 100,
          date: '2024-09-28T15:30:00Z',
          description: 'Grocery shopping',
        },
        {
          id: 3,
          type: 3,
          amount: 300,
          date: '2024-09-29T11:45:00Z',
          description: 'Salary credit',
        },
        
      ],
}))

export default useTransaction