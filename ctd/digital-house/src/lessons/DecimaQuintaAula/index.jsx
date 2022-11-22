import { useState } from 'react'
import { DecimaQuintaAulaItem } from '../../components/DecimaQuintaAulaItem'
import './style.scss'

export function DecimaQuintaAula() {

    const [locations, setLocations] = useState([])
    const [cep, setCep] = useState('')

    function searchCep(cepRecieved) {
        
        setCep(cepRecieved)

        if(cepRecieved.lenght === 8){
            //requisição da API ViaCep
            fetch('https://viacep.com.br/ws/${cepReceived}/json/').then(
                response => {
                    response.json().then(
                        address => {


                            if(address.erro !== undefined){

                                //Deu erro

                            }
                            else{

                                //Deu Sucesso
                                setLocations([...locations, address])
                                
                            }
                            
                        }
                    )
            }   )
        }   
        
    }


    function deleteLocation(){

        console.log("O registro foi deletado")

    }


    return(

        <div className="decima-quarta-aula-component">

            <form>

                <h1>Cadastrar endereços</h1>

                <div>
                    <label htmlFor="">Cep</label>
                    <input
                        type="number"
                        value={cep}
                        onChange={event => searchCep(event.target.value)}
                    />
                </div>

                <button>Cadastrar</button>

            </form>

            <section className="locations">

                {
                    locations.map(
                        (location, index) => ( //posso retirar as chaves, que conseguimos eliminar o return
                        
                            <DecimaQuintaAulaItem
                                key={index}
                                data={location}
                                onDeleteLocation={currentLocation => deleteLocation(location)}
                            />
                        )
                        
                    )
                }

            </section>

            <link to="/decima-quarta-aula">
                <button>Aula Anterior</button>

            </link>

        </div>

    )

}