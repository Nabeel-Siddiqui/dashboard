import React from 'react'
import '../Styling/Quote.css'

export default function Quote( { quote } ) {

    return (
        <div className="quote-text">
            <h3> "{quote.quote}" </h3>
            - {quote.author}
        </div>
    )
}