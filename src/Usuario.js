import React from "react"




function Usuarios(props){

    const [nome, setNome] = React.useState(props.nomeeditavel)
    function inserirNome(){
        const nomePrompt = prompt("Qual é o se nome?")
        setNome(nomePrompt)
}

const [foto, setFoto] = React.useState(props.imagem)
    function inserirImagem(){
        const fotoPrompt = prompt("Qual é a url da foto?")
        setFoto(fotoPrompt)
}

    return (
        <div class="usuario">
          <img src={foto} onClick={inserirImagem}/>
          <div class="texto">
            <strong>{props.nome}</strong>
            <span>
              {nome}
              <ion-icon name="pencil" onClick={inserirNome}></ion-icon>
            </span>
          </div>
        </div>
    )
}

export default function Usuario(){

    
    const usuario = [
        {nome:"catanacomics", nomeeditavel:"Catana", imagem:"assets/img/catanacomics.svg"}
    ]
    return (
        usuario.map((f) => <Usuarios nome={f.nome} nomeeditavel={f.nomeeditavel} imagem={f.imagem}/>)
    )
}
