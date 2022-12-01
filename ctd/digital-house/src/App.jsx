import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { MainLayout } from "./components/MainLayout"

import { DecimaQuintaAula } from './lessons/DecimaQuintaAula'
import { DecimaQuartaAula } from './lessons/DecimaQuartaAula'
import { DecimaTerceiraAula } from './lessons/DecimaTerceiraAula'
import { OitavaAula } from './lessons/OitavaAula'
import { QuartaAula } from './lessons/QuartaAula'
import { QuintaAula } from './lessons/QuintaAula'
import { SegundaAula } from './lessons/SegundaAula'
import { SetimaAula } from './lessons/SetimaAula'
import { TerceiraAula } from './lessons/TerceiraAula'
import { DHGames } from './pages/DHGames'
import {Login} from './pages/Login'
import { ThemeProvider } from "./hooks/useTheme"


function App() {
  
  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: 'segunda-aula',
          element: <SegundaAula />,
        },
        {
          path: 'terceira-aula',
          element: <TerceiraAula />,
        },
        {
          path: 'quarta-aula',
          element: <QuartaAula />,
        },
        {
          path: 'quinta-aula',
          element: <QuintaAula />,
        },
        {
          path: 'setima-aula',
          element: <SetimaAula />,
        },
        {
          path: 'oitava-aula',
          element: <OitavaAula />,
        },
        {
          path: 'decima-terceira-aula',
          element: <DecimaTerceiraAula />,
        },
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
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  )
}

export default App
