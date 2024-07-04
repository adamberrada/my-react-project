import React, { useState, useEffect} from 'react';
import WebFont from 'webfontloader';
import './App.css';
import quotesData from './items/quotes.json';
import colorData from './items/color.json'
import QuoteMachine from './components/QuoteMachine'
import Header from './components/Header';
import SocialMedia from './components/SocialMedia';
import './styles.css';


 const getRandomQuote = () => {
  const quotes = quotesData.quotes;
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  console.log('Selected random quote object:', randomQuote);
  return randomQuote;
}

const getRandomColor = () => {
  const colors = colorData.color;
  const randomIndex = Math.floor(Math.random() * colors.length )
  const randomColors = colors[randomIndex].color;
  console.log('select tandom color', randomColors);
  return randomColors;
}




function App() {
  const [transitionClass, seTransitionClass] = useState('quote');
  const [quote,setQuote] = useState(getRandomQuote);
  const [color,setColor] = useState(getRandomColor);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Quattrocento']
      }
    });

   seTransitionClass('quote-enter');
   const timer = setTimeout(() => {
    seTransitionClass('quote');
   }, 500);
   
   
    document.body.style.backgroundColor = color;
   console.log( "useeffect color",color)
   return () => clearTimeout(timer);
  }, [quote,color]);

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
    setColor(getRandomColor());
  }
  return (
    <div className="">
      <div id="quote-box" className="container" >
      <Header color={color}/>
      <QuoteMachine  quote={quote} color={color} transitionClass={transitionClass}  />
      <SocialMedia  color={color} handleNewQuote={handleNewQuote}/>
     
    </div>
    <div className='footer'>By Adam</div>
    </div>
    
     
    
  );
}

export default App;
