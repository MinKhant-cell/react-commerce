import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import CashInPage from '../src/pages/CashInPage.jsx'
import CashInConfirmPage from '../src/pages/CashInConfirmPage'
import './index.css'
import 'react-router-dom'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TransactionsHistoryPage from './pages/TransactionsHistoryPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cashIn",
    element: <CashInPage/>,
  },
  {
    path: "/cashInConfirmPage",
    element: <CashInConfirmPage/>,
  },
  {
    path: "/transactionsHistory",
    element: <TransactionsHistoryPage/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
