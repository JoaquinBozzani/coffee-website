import React, { useRef, useState } from 'react';
import './slider.css';
import img1 from './../../assets/slider/coffee-1.jpg'
import img2 from './../../assets/slider/coffee-2.jpg'
import img3 from './../../assets/slider/coffee-3.jpg'


const Slider = () => {

  //to change image on the slider
  const slider = useRef(null);
  
  //to change the quote when pressing the next/prev slide buttons
  const [quote, setQuote] = useState(0);  
  const quotes = ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate praesentium atque facilis', 'Impedit minus, error eos quos enim aut quam praesentium commodi placeat', 'Nulla error aliquid dolorem harum voluptas, reiciendis ut quidem, iure odio optio delectus']


// ----- SLIDER FUNCTIONS -----
  function nextSlide() {  
    //get the first slide in slider and the width of that slide
    const firstSlide = slider.current.children[0];
    const slideSize = firstSlide.offsetWidth;

    //add transition for the slides
    slider.current.style.transition = `300ms ease-out all`;

    //move the slide
    slider.current.style.transform = `translateX(-${slideSize}px)`;


    //reset the position of the slider
    function transition() { 
      slider.current.style.transition = `none`;
      slider.current.style.transform = `translateX(0)`;

      //get the first slide and put it at the end
      slider.current.appendChild(firstSlide);

      //remove event listener
      slider.current.removeEventListener('transitionend', transition);
    }

    //move quote
    nextQuote();

    //event listener for the transition function
    slider.current.addEventListener('transitionend', transition)
  }
 
  function prevSlide() {
    //get the last slide in slider and the width of that slide
    const lastSlide = slider.current.children[slider.current.children.length - 1];
    const slideSize = lastSlide.offsetWidth;
    
    //get the last slide and put it at the start
    slider.current.insertBefore(lastSlide, slider.current.firstChild)

    //reset slider 
    slider.current.style.transition = `none`;
    slider.current.style.transform = `translateX(-${slideSize}px)`;
    
    //move slider 
    setTimeout(() => {
      slider.current.style.transition = `300ms ease-out all`;
      slider.current.style.transform = `translateX(0)`;
    }, 30)

    //move the quote 
    prevQuote();
  }
  
// ----- QUOTE FUNCTIONS -----
  function prevQuote() {
    quote > 0 ? setQuote(quote - 1) : setQuote(quotes.length - 1);
  }

  function nextQuote() {
    quote < (quotes.length - 1) ? setQuote(quote + 1) : setQuote(0);
  }
  

  return (
    <>
      <div className="desktop-controls">
          <button className='slider-button left-arrow' onClick={prevSlide} >&lt;</button>
          <button className='slider-button right-arrow' onClick={nextSlide}>&gt;</button>
      </div> 

      <div className='slider-container'>

        <div className='slider' ref={slider}>
            <img className='slide' src={img1} alt="Coffee" />
            <img className='slide' src={img2} alt="Coffee" />
            <img className='slide' src={img3} alt="Coffee" />
        </div>

        <div className='mobile-controls'>
          <button className='slider-button left-arrow' onClick={prevSlide} >&lt;</button>
          <button className='slider-button right-arrow' onClick={nextSlide}>&gt;</button>
        </div>


      </div>

      <div className="quote-container">
        <div className='quote'>
          <p>❝{quotes[quote]}❞</p>
        </div>
      </div>

    </>
  )
}

export default Slider  