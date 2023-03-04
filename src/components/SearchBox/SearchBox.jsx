import './SearchBox.scss'



function SearchBox () {
    return(

        <form className='header__form'>

            <input type="text" id='search' name='search' placeholder='search' className='header__input'/>
            
        </form>
    )
}

export default SearchBox;