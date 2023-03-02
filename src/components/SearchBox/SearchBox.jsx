import './SearchBox.scss'



function SearchBox () {
    return(

        <form className='Form'>
            <input type="text" id='search' name='search' placeholder='search' className='Form__Input'/>
        </form>
    )
}

export default SearchBox;