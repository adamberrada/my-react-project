import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub  } from '@fortawesome/free-brands-svg-icons';



function SocialMedia( { color , handleNewQuote }) {
    const iconStyle = {
        backgroundColor: color,
        color: 'white',
         height: '35px',
         width: '60px',
         borderRadius: '5px'
        
    }

    const buttonSyle = {
        backgroundColor: color,
        color: 'white',
        border: 'none',
        borderRadius: '5px'
      }
    return (
        <>
            <div className='end' >
            <div className='twiter-github'>
            <a id="tweet-quote" href="twitter.com/intent/tweet" target='_top' rel='noopener noreferrer'>
            <FontAwesomeIcon style={iconStyle} icon={faTwitter} />
            </a>
            <a  href='https://github.com/adamberrada' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon style={iconStyle} icon={faGithub} />
            </a>
            </div>
            <button id='new-quote' style={buttonSyle} onClick={handleNewQuote}>New Quote</button>
            </div>
        </>
    )
}
export default SocialMedia;