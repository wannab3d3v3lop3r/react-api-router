import React, { Component } from 'react'
import './Forms.css'

export class Forms extends Component {
    constructor(){
        super()
        this.state = {
            input: '',
            bookType: 'ebooks',
            printType: 'all',
            errorMessage: ''
        }
    }

    updateBookType = bookType => {

        this.setState({
            bookType
        })

        const {input, printType} = this.state;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${input}+intitle:${input}&filter=${bookType}&printType=${printType}`;
        const options = {
          method: 'GET',
          key: process.env.API_KEY,
          headers: {
            'Content-Type': `application/json`,
          },
        };

        fetch(url, options)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                this.props.fetchData(data);
            })
            .catch(err => {
                console.log(`error message is `,err);
                this.setState({
                    errorMessage: err.message
                })
            })
    }

    updatePrintType = printType => {

        this.setState({
            printType
        })

        const {input, bookType} = this.state;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${input}+intitle:${input}&printType=${printType}&filter=${bookType}`;
        console.log(url);
        const options = {
          method: 'GET',
          key: process.env.API_KEY,
          headers: {
            'Content-Type': `application/json`,
          },
        };

        fetch(url, options)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                this.props.fetchData(data);
            })
            .catch(err => {
                console.log(`error message is `,err);
                this.setState({
                    errorMessage: err.message
                })
            })

    }

    handleSubmit(e){
        e.preventDefault();
        const {input} = this.state;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${input}+intitle:${input}`;
        const options = {
          method: 'GET',
          key: process.env.API_KEY,
          headers: {
            'Content-Type': `application/json`,
          },
        };

        fetch(url, options)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                this.props.fetchData(data);
            })
            .catch(err => {
                console.log(`error message is `,err);
                this.setState({
                    errorMessage: err.message
                })
            })
    }

    render() {
        return (
            <div>
                <div className='search-container'>
                    <span>Search:</span>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <input 
                            name="search" 
                            id="search" type="text" 
                            placeholder="search for books" 
                            value={this.state.input} 
                            onChange={e => this.setState({input: e.target.value})}/>
                        <button type="submit">Search</button>
                    </form>
                </div>
                <div className='filter-container'>
                    <form>
                        <label htmlFor="print-type">Print Type: </label>
                        <select id="print-type"  onChange={e => this.updatePrintType(e.target.value)}>
                            <option value="all">All</option>
                            <option value="books">Books</option>
                            <option value="magazines">Magazines</option>
                        </select>
                        <label htmlFor="book-type">Book Type:</label>
                        <select id="book-type"  onChange={e => this.updateBookType(e.target.value)}>
                            <option value="ebooks">No Filter</option>
                            <option value="free-ebooks">Free eBooks</option>
                            <option value="paid-ebooks">Paid eBooks</option>
                        </select>
                    </form>
                </div>
            </div>
        )
    }
}

export default Forms
