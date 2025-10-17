import { useState } from "react"

export default function InputStatus(){
    const [lista, setLista] = useState([])

    function adicionaItens(){
        let data = document.getElementById("input_btn").value
        setLista([...lista,data])
    }

    return <>
        <ul>
            {
                lista.map((item,idx)=>(
                    <li>{item}</li>
                ))
            }
        </ul>
        <input type="text" id="input_btn" placeholder="coloque aqui um item"/>
        <button onClick={adicionaItens}>Enviar</button>
    </>
}