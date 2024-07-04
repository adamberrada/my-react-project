import React from 'react';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

function InsideQuote({ quote,color, transitionClass}) {

    const MysStyle = {
      color : color,
      margin: "5px",
    }
   
  return (
    <div className="inside-quote">
    <div className={transitionClass}>
    <FontAwesomeIcon icon={faQuoteLeft} />
    <p id="text" className='quote' style={MysStyle}> {quote.quote}</p>  
    <span>-
    <p id="author" className='author' style={MysStyle}> {quote.author}</p> {/* Access the `quote` property */}
    </span>
    </div>
     
    </div>
  );
}

export default InsideQuote;
