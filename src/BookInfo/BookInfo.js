import React, { Component } from 'react'
import './BookInfo.css'

export class Bookinfo extends Component {
    render() {
        return (
            <div className='lists'>
                <div class="img">
                    <a target={`_blank`} href={`${this.props.imageUrl}`}><img alt={`${this.props.title}`} src={`${this.props.image}`}/></a>
                </div>
                <div className='lists-text-container'>
                    <h1>{this.props.title}</h1>
                    <p>Author: {this.props.author}</p>
                    <p>Price: ${this.props.price}</p>
                    <p>{this.props.description}</p>
                </div>
            </div>
            
        )
    }
}

export default Bookinfo
