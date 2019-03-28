import React from 'react';
import Logo from '../../img/Instagram_logo.png';


const SearchBar = props => {
    
    return (
        <div className = 'searchBarWrapper'>
            <div className = 'searchBarInstagram'>
                <i className = "fab fa-instagram"></i>
                <img src = {Logo} className = 'instagramBrandName' alt = 'Instagram Logo' width ='100' height = '37'/>


            </div>
            <div className = 'searchBarSearchWrapper'>
                <form className = 'searchBarSearchForm'>
                    <input 
                        value={props.infomationBeingSearched}
                        onChange={props.changeSearchInput}
                        placeholder='Search'
                        // onChange={props.searchIconFunction}
                    
                    />
                    



                    <button className='searchBarButton' onClick={props.searchIconFunction}><i className="fas fa-search"></i> </button>
        </form>
            </div>
            <div className = 'searchBarRightIcons'>
                <i className = "far fa-compass"></i>
                <i className = "far fa-heart"></i>
                <i className = "far fa-user"></i>

            </div>
        </div>
    )
}

export default SearchBar;