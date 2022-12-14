import './style.scss'
import montanha from './../../assets/images/montanha.jpg'
import { Link } from 'react-router-dom'

export function TerceiraAula(){
    
    
    const components = [
        {name: 'Component Card', description: 'teste', image: 'montanha'},
        /* {name: '', description: 'teste', image: ''},
        {name: '', description: 'teste', image: ''},
        {name: '', description: 'teste', image: ''} */
    ]
    
    return (
        <div>
            <img src={montanha} />
            <h1>Lista de componentes encontrados em um sistema</h1>
            <ul>
                {
                    components.map(components =>(
                        <li>
                            <img src={components[0].image} />
                            <h1>{components[0].name}</h1>
                            <p>{components[0].description}</p>
                        </li>
                    ))
                }
            </ul>
        </div>/* ,

        <ul>
            <Link to="quarta-aula">
                <button>Aula Posterior</button>

            </Link>
        </ul> */
    )
}