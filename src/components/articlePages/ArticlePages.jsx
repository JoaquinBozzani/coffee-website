import React, { useState } from 'react'
import './articlePages.css';
import Article from '../article/Article'
import articleData from './article-data.js';


const ArticlePages = () => {

  //state for checking which article page is active
  //state starts in 1 so the first page is active 
  const [active, setActive] = useState(1);

  
  //functions to change pages
  function prevPage() {
    if(active > 1) {
      setActive(active - 1)
    } 
  }

  function nextPage() {
    if(active < 3) {
      setActive(active + 1)
    }
  }


  return (
    <>
    <div className='article-page-container'>
      {
        //only render the articles if this page is active
        active === 1 &&
        <div className='article-page'>
          {
            articleData && articleData.slice(0, 4).map((item) => 
            <Article
              image={item.image} title={item.title} date={item.date} text={item.text} key={item.id}
            />
            )
          }
        </div>
      }

      {
        //only render the articles if this page is active
        active === 2 &&
        <div className='article-page'>
          {
            articleData && articleData.slice(4, 8).map((item) => 
            <Article 
              image={item.image} title={item.title} date={item.date} text={item.text} key={item.id}
            />
            )
          }
        </div>
      }

      {
        //only render the articles if this page is active
        active === 3 &&
        <div className='article-page'>
          {
          articleData && articleData.slice(8, 12).map((item) => 
          <Article
            image={item.image} title={item.title} date={item.date} text={item.text} key={item.id}
          />
          )
          }
        </div>
      }

      <div className='page-controls'>
          <button className='page-button prev' onClick={prevPage}>Previous</button>
          <p>Page {active} of 3</p>
          <button className='page-button next' onClick={nextPage}>Next</button>
      </div>
      
    </div>
    </>
  )
}

export default ArticlePages