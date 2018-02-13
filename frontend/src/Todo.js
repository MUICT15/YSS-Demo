import React from 'react';
import axios from 'axios';
import './ToDo.css'
class ToDoComponent extends React.Component {
  constructor(props) {
      super(props)
    this.state = {
        ToDos: [],
        text: ''
    }

    axios.get('http://localhost:3030/')
        .then((data)=>{
        console.log(data.data.ToDo)

        const arr = this.state.ToDos.concat(data.data.ToDo);
        this.setState({
            ToDos: arr
        })
    })
  }

  onChangeText(value){
      this.setState({
          text: value
      })
  }

  removeText(id){
      console.log(id)
      axios.delete(`http://localhost:3030/remove/${id}`).then((data)=>{
        console.log(data.data.ToDo)
        this.setState({
            ToDos: data.data.ToDo
        })
      })
  }
  addText(){
    axios.post('http://localhost:3030/add', {
        ToDo: this.state.text
      }).then((data)=>{
        console.log(data.data.ToDo)
        this.setState({
            ToDos: data.data.ToDo
        })
      })
  }

  render() {
      return(
          <div>
              <input type="text" placeholder=" Add ToDo" onChange={(e)=> this.onChangeText(e.target.value)}/>
              <br/>
              <button type="button" onClick={this.addText.bind(this)} >
              Add
              </button>
              <ul>
              {this.state.ToDos.map((value,index)=>{
                  return(
                      <div className="Todo" key={index}>
                      <li key={index} className="closeIcon" onClick={this.removeText.bind(this , value._id)}>X</li>
                      <p className="text">{value.ToDo}</p></div>
                  )
              })}
              </ul>
          </div>
      )
  }
}

export default ToDoComponent