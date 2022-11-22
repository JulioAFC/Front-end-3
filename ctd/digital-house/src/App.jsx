import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { MainLayout } from "./components/MainLayout"

import { OitavaAula } from './lessons/OitavaAula'
import { QuartaAula } from './lessons/QuartaAula'
import { QuintaAula } from './lessons/QuintaAula'
import { SegundaAula } from './lessons/SegundaAula'
import { SetimaAula } from './lessons/SetimaAula'
import { TerceiraAula } from './lessons/TerceiraAula'
import { DHGames } from './pages/DHGames'
import {Login} from './pages/Login'


function App() {
  
  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: 'decima-quarta-aula',
          element: <DecimaQuartaAula />,
        },
        {
          path: 'decima-quinta-aula',
          element: <DecimaQuintaAula />,
        }
      ]
    }
    
  ])
  
  return (
    <RouterProvider router={appRouter} />

  )
}

export default App
