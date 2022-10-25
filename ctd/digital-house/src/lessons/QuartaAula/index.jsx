import './style.scss'
import youtubeImage from './../../assets/images/youtubeImage.png'

export function QuartaAula(){

    
    const componentsFinded = [
        {
            title: 'Vídeo Component',
            image:youtubeImage,
            text:'Loem ipsum, dolor sit amet consectetur.' 
        },
        {
            title: 'Input Component',
            image:youtubeImage,
            text:'Loem ipsum, dolor sit amet consectetur.' 
        },
    ]


    return(

        <div className='quarta-aula-component'>
            <h1 className='main-title'>Componentes identificados</h1>

            <ul className='components-finded'>
                
                {
                    componentsFinded.map(
                        component => {
                            return(
                                <li>
                                    <img src={component.image}  alt="" />
                                    <h1>{component.title}</h1>
                                    <p>{component.text}</p>
                                </li>
                            )
                        }
                    )

                }
                
                <li>
                    <img src={youtubeImage}  alt="home do YouTube" />
                    <h1>Vídeo</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, at.</p>
                </li>

            </ul>
        </div>
    )
}