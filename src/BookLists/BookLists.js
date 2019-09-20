import React, { Component } from 'react'
import BookInfo from '../BookInfo/BookInfo'
import get from 'get-value'

export class Booklists extends Component {

    render() {
        const bookInfo = this.props.arrayLength !== 0 ? this.props.books.map((book,index) => {
            return <BookInfo 
                        key={get(book,'id')}
                        title={get(book,'volumeInfo.title')}
                        author={get(book,'volumeInfo.authors')}
                        price={get(book,'saleInfo.listPrice.amount',0)}
                        saleability={get(book,'saleInfo.saleability')}
                        ebook={get(book,'saleInfo.isEbook')}
                        description={get(book,'searchInfo.textSnippet')}
                        image={get(book,'volumeInfo.imageLinks.thumbnail', '')}
                        imageUrl={get(book,'volumeInfo.infoLink')}
                        printType={get(book,'volumeInfo.printType')}
                    />
        }) : ''

        return (
            <div className="book-lists">
                {bookInfo}
            </div>
        )
    }
}

export default Booklists
