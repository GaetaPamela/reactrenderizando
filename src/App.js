import React,{Component} from "react";
import fruta from "./uva.webp"
export default class app extends Component{
  state={ 
    nome:"Pamela",
    idade:"25",
    Sua_comida_favorita:"Bife a milanesa",
    musica:[
      "Thinking out loud- Ed Sheeran",
      "Senõrita- Shaw Mendes",
      "Jorge e Matheus"
    ]
  }
  render(){
    return(
      <header> 
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.Sua_comida_favorita}</h3>
        <ul>
          <li>{this.state.musica[0]}</li>
          <li>{this.state.musica[1]}</li>
          <li>{this.state.musica[2]}</li>          
        </ul>
        <img src={fruta}/>
      </header>

     ) 
  } 
}

