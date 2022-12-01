import { useEffect } from "react"
import { useTheme } from "../../hooks/useTheme"

export function Configurations(){

    //Utilização do Hook useTheme
    const {theme} = useTheme()

    return(

        <div>

                <h1>Condigurações</h1>

                <form>

                        <section>
                            <h1>Tema</h1>

                            <div>
                                <label htmlFor="light">Claro</label>
                                <input type={radio} name="theme" id="light" checked={theme === 'light'} onChange={() => changetheme('light')} />
                            </div>

                            <div>
                                <label htmlFor="dark">Escuro</label>
                                <input type={radio} name="theme" id="dark" checked={theme === 'dark'} onChange={() => changetheme('dark')} />
                            </div>

                        </section>
                </form>
        </div>
    )
}