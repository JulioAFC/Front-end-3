import { Outlet } from 'react-router-dom'
import './style.scss'
//Estruturando as rotas para a página principal
export function MainLayout(){
    
    return(
        <div className="main-layout-component">
            <header className="main-layout-component-header">
                <h1>Layout Principal</h1>

                <ul>

                    <li>

                        <link to="decima-quarta-aula">Decima Quarta Aula</link>
                    </li>
                    
                    <li>
                        <link to="decima-quinta-aula">Decima Quinta Aula</link>

                    </li>
                </ul>
            </header>

            <main className="main-layout-component-main">

                <p>O conteúdo será carregado aqui dentro:</p>
                
                <Outlet /> {/* Vai fazer carregar os elementos presentes na rota */}
                 
            </main>
        </div>
    )
}