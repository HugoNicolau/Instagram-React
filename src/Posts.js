function Post(props){
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
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.curtidasimg} />
                <div class="texto">
                  Curtido por <strong>{props.curtidasnome}</strong> e <strong>outras {props.curtidasvalor} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )
}

export default function Posts(){
    const post =[
        {usuario:"meowed" , imagem:"assets/img/meowed.svg", conteudo:"assets/img/gato-telefone.svg", curtidasimg:"assets/img/respondeai.svg", curtidasnome:"respondeai", curtidasvalor:101.523 },
        {usuario:"barked" , imagem:"assets/img/barked.svg", conteudo:"assets/img/dog.svg", curtidasimg:"assets/img/adorable_animals.svg", curtidasnome:"adorable_animals", curtidasvalor:99.159 }
    ]
    return (
        <div class="posts">
          
            post.map((f) => <Post usuario={f.usuario} imagem={f.imagem} conteudo={f.conteudo} curtidasimg={f.curtidasimg} curtidasnome={f.curtidasnome} curtidasvalor={f.curtidasvalor}/>)
          
        </div>
    )
}