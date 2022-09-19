function Usuario(props){
    return (
        <div class="usuario">
          <img src={props.imagem} />
          <div class="texto">
            <strong>{props.nome}</strong>
            <span>
              {props.nomeeditavel}
              <ion-icon name="pencil"></ion-icon>
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
        usuario.map((f) => <Usuario nome={f.nome} nomeeditavel={f.nomeeditavel} imagem={f.imagem}/>)
    )
}
