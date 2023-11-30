import { createBrowserRouter } from 'react-router-dom'

import { routes } from '@/shared/routes'

import { Auth } from './Auth'

export const router = createBrowserRouter([
  {
    path: routes.LOGIN,
    element: <Auth />,
  },
])
