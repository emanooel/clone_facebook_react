import { useState } from "react"

export default function Curtida(){
    // let curtidas = 0
    const [curtidas, setCurtidas] = useState(0)

    function adicionaCurtida(){
        setCurtidas(curtidas + 1)
        console.log(curtidas)
    }

    return <>
        <p>{curtidas}</p>
        <button onClick={adicionaCurtida}>Curtir</button>
    </>
}