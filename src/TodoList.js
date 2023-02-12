import { Component } from "react";
import icon from './icon.png'
export class TodoList extends Component {
state = {
     text: '',
     addText: []
}
onChangeEvent(e){
    this.setState({text: e})
}
addItem(input){
    if (input===''){
        alert ("Please, enter an item")
    }
    else {
let listArray = this.state.addText;
listArray.push(input);
this.setState({addText: listArray, text: ''})
    }
}
deleteItem(){
let listArray = this.state.addText;
listArray = [];
this.setState({addText: listArray})
}
crossedWord(event){
    const li = event.target;
    li.classList.toggle("crossed")
}
onFormSubmit(e) {
e.preventDefault();
}

render(){
    return (
<div>
    <form onSubmit={this.onFormSubmit}>
    <div className="container">
    <input type="text" 
           placeholder="Write your to-do list" 
           onChange = {(e) => {this.onChangeEvent(e.target.value)}}
           value={this.state.text}/>
    </div>  
    <div className="container">
        <button onClick={() => this.addItem(this.state.text)} className="add">Add</button>
    </div>
    <div className="container">
        <ul>
            {this.state.addText.map((item, index) => (<li onClick={this.crossedWord} key={index}><img src={icon} width="30px" alt="list"/>{item}</li>) )}
            
        </ul>
    </div>
    <div className="container">
        <button onClick={() => this.deleteItem()} className="delete">Delete</button>
    </div>
    </form>   
</div>
    )
}
}