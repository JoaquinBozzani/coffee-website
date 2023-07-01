import Modal from '../modal/Modal';
import './modal-article.css';
import closeImg from '../../assets/article-modal/close.svg'
import { useState } from 'react';

const Article = (props) => {

  const [openModal, setOpenModal] = useState(false)

 
  function handleClick(e) {
    setOpenModal(!openModal);
    // check if the button is open, if it is close it, if not open it
    e.currentTarget.classList.contains('open') 
    ? e.currentTarget.classList.remove('open') 
    : e.currentTarget.classList.add('open');
  }


  return (
    <>
      <div className='article'>

        <img src={props.image} alt="" className='article-img' />
        <div className='article-content'>
          <h1 className='article-title'>{props.title}</h1>
          <p className='article-date'>{props.date}</p>
          <p className='article-text'>{props.text}</p>
          <button className='open-article-button' onClick={handleClick}>Read More</button>
        </div>
        
      </div>
      
      <Modal className={`article-modal ${openModal ? 'open' : ''}`}>
          <div className='modal-content'>
            <img src={props.image} alt="" className='article-img' />
            <div className='modal-text-container'>

              <h1 className='article-title'>{props.title}</h1>
              <p className='article-date'>{props.date}</p>
              <p className='article-text'>{props.text}</p>

              <button className='close-modal' onClick={handleClick}>
                <img src={closeImg} alt="Close Button" />
              </button>
            </div>
          </div>
      </Modal>

    </>
  )
}

export default Article