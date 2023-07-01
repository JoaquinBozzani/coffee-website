import {React, useState} from 'react'
import searchIconStatic from '../../../assets/search.svg'
import articleData from '../../articlePages/article-data.js';
import Article from '../../article/Article';
import Modal from '../../modal/Modal';

const Searchbar = () => {
    //searchbar function
    const [searchTerm, setSearchTerm] = useState(''); 
    
    function handleSearchbar(e) {
      setSearchTerm(e.target.value);
      console.log(e.target.value)
    }

    //showing search results
    const [isUserSearching, setIsUserSearching] = useState(false);
    
    function handleSearchResults() {
        setIsUserSearching(!isUserSearching)
    }


    return (
        <>
            <div className='searchbar-container'>
                <img src={searchIconStatic} alt=''/>
                <input className='search-input'  type='text' value={searchTerm} placeholder='Search...' onChange={handleSearchbar} onFocus={handleSearchResults} />
            </div>

            <Modal className={`search-results ${isUserSearching ? 'open' : ''}`}>
                <div className='search-data'>
                {
                    // check if there is data
                    articleData && articleData
                    //filter the data with the search value
                    .filter((value => {
                        //if no value, show all of the data
                        if (searchTerm === '') {
                            return value;
                        } else if(value.title.toLowerCase().includes(searchTerm)) {
                            return value;
                        }
                    }))
                    //return the filtered data
                    .map((item) => <Article image={item.image} title={item.title} date={item.date} text={item.text} key={item.id}/>)
                }
                </div>
            </Modal>
        </> 
  )
}

export default Searchbar