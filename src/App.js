import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }

  updateInput(key, value){
    //update react state
    this.setState({
      [key]: value
    });
  }

  addItem(){
    //create item with unique id
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    if (newItem.value != ""){
      list.push(newItem);
    }
    
    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem:""
    });
  }

  deleteItem(id){
    //copy current list of items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList})
  }

  render(){
  return (
    <div className="App">

    <h1 className="app-title">MY TO-DO LIST</h1>

    <div className="container">
      <div className="info">
        Add an Item
        <br/>
        <input class="item-holder"
        type="text"
        placeholder="Type item here..."
        value={this.state.newItem}
        onChange={e => this.updateInput("newItem", e.target.value)}
        />
        <button
        className="add-btn"
        onClick={() => this.addItem()}
        disabled={!this.state.newItem.length}
        >
          <i class="material-icons">+ </i>
        </button>
        <br/>
        <ul>
          {this.state.list.map(item => {
            return(
              <li class="list-item" key={item.id}>
              {item.value}
                <button className="btn btn-floating"
                  onClick={() => this.deleteItem(item.id)}
                >
                  <i class="material-icons">X</i>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      </div>
    </div>
  );
}
}


export default App;
