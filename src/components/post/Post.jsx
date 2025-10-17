import { useState } from "react"
import Like from "../../assets/icones/Like.svg"
import Post from "../../assets/foto/foto_perfil.webp"
import "./Post.css"



export default function InputStatus(){
    const [lista, setLista] = useState([])

    function adicionaItens(){
        let data = document.getElementById("input_btn").value
        setLista([...lista,data])
    }

    return <>
        <img src={Post} alt="" />
        <div>
            <div className="flex">
                <img className="icon" src={Like} alt="like" />
                <p>0</p>
            </div>
        </div>
        <div className="flex">
            <input type="text" id="input_btn" placeholder="Deixe um comentario"/>
            <button onClick={adicionaItens}>Enviar</button>
        </div>
    </>
}