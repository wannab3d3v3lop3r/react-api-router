import React, { Component } from 'react'
import Booklists from './BookLists/BookLists'
import Forms from './Forms/Forms'
import './App.css'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      totalItems: 0,
    }
  }

  fetchData = data => {
    this.setState({
      books: data.items,
      totalItems: data.totalItems
    })
  }

  render() {
    return (
      <div>
        <div className='container'>
          <h1 className='google-title'>Google Book Search</h1>
        </div>
        <Forms fetchData={this.fetchData}/>
        <Booklists books={this.state.books} arrayLength={this.state.totalItems}/>
      </div>
    )
  }
}

export default App
