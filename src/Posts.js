import React from "react"

function Post(props){

    const [salvei, setSave] = React.useState(props.savename)
    function inserirSave(){
        
        setSave("bookmark")
}
let [numerodelikes, setLikes] = React.useState(props.curtidasvalor)
const [curtir, setCurtida] = React.useState(<ion-icon name="heart-outline" onClick={inserirCurtida}></ion-icon>)
    function inserirCurtida(){
        
        setCurtida(<ion-icon name="heart" onClick={tirarCurtida} class="curtido"></ion-icon>)
        setLikes(numerodelikes+1);
}
    function tirarCurtida(){
        setCurtida(<ion-icon name="heart-outline" onClick={inserirCurtida}></ion-icon>)
        setLikes(numerodelikes);
    }
    return (
        <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.imagem} />
                {props.usuario}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={props.conteudo} />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  {curtir}
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name={salvei} onClick={inserirSave}></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.curtidasimg} />
                <div class="texto">
                  Curtido por <strong>{props.curtidasnome}</strong> e <strong>outras {numerodelikes.toLocaleString('pt-br')} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )
}

export default function Posts(){
    const post =[
        {usuario:"meowed" , imagem:"assets/img/meowed.svg", conteudo:"assets/img/gato-telefone.svg", curtir:"heart-outline",  curtidasimg:"assets/img/respondeai.svg", curtidasnome:"respondeai", curtidasvalor:101523, savename:"bookmark-outline"},
        {usuario:"barked" , imagem:"assets/img/barked.svg", conteudo:"assets/img/dog.svg", curtir:"heart-outline", curtidasimg:"assets/img/adorable_animals.svg", curtidasnome:"adorable_animals", curtidasvalor:99159, savename:"bookmark-outline" }
    ]
    return (
        <div class="posts">
          
            {post.map((f) => <Post usuario={f.usuario} imagem={f.imagem} conteudo={f.conteudo} curtir={f.curtir} curtidasimg={f.curtidasimg} curtidasnome={f.curtidasnome} curtidasvalor={f.curtidasvalor} savename={f.savename}/> )}
          
        </div>
    )
}