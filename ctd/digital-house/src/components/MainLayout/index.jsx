import { Link, Outlet } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import './style.scss'


//Estruturando as rotas para a página principal
export function MainLayout(){

    //Importação do Tema utilizando o Hook customizado "useTheme"
    const { theme } = useTheme()

    return(
        <div className={`main-layout-component ${theme}`}>
            <header className="main-layout-component-header">
                <h1>Layout Principal</h1>
            </header>
            <aside className='main-layout-component-aside'>

            <section>
                <h1>Aulas</h1>
                <ul>
                    <li>
                        
                        <Link to="segunda-aula">Segunda Aula</Link>
                    </li>
                    <li>
                        
                        <Link to="terceira-aula">Terceira Aula</Link>
                    </li>
                    <li>
                        
                        <Link to="quarta-aula">Quarta Aula</Link>
                    </li>
                    <li>
                        
                        <Link to="quinta-aula">Quinta Aula</Link>
                    </li>
                    <li>
                        
                        <Link to="setima-aula">Setima Aula</Link>
                    </li>
                    <li>
                        
                        <Link to="oitava-aula">Oitava Aula</Link>
                    </li>
                    <li>
                        
                        <Link to="decima-terceira-aula">Decima Terceira Aula</Link>
                    </li>
                    <li>
                        
                        <Link to="decima-quarta-aula">Decima Quarta Aula</Link>
                    </li>
                    
                    <li>
                        <Link to="decima-quinta-aula">Decima Quinta Aula</Link>

                    </li>
                </ul>
            </section>

            <section>
                <h1>Telas</h1>
                    <ul>
                        <li>
                            <Link to="to-do">To Do</Link>
                        </li>
                        <li>
                            <Link to="configurations">Configurações</Link>
                        </li>
                    </ul>
            </section>

            </aside>
            <main className='main-layout-component-main'>
                <Outlet />
            </main>
        </div>
    )
}