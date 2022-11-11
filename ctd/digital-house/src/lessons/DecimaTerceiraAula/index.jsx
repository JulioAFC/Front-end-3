import { useState, useEffect } from "react"

export function DecimaTerceiraAula (){

    //hook
    const [contador, setContador] = useState(0)
    const [userName, setUserName] = useState('')
    const [userNameError, setUserNameError] = useState (false)

    function adicionar(){

        setContador(contador + 1)
    }

    useEffect(
        ()=>{
        
        console.log()
        
        if(userName.length > 10){
            setUsernameError(true)
        }
        else{
            setUserNameError(false)
        }

    }, [userName]
    )


    return(
        <>
            <h1>Teste</h1>
            <input type= "text" value= {userName} onChange={event => setUserName.target.value} />
            {userNameError ? (<small>O campo nome contém mais do que 10 caracteres</small>) : null}
            <p>O valor do Contador é {contador}</p>
            <button onClick={() => adicionar()}>Atualizar Contador</button>
        </>
    )
}