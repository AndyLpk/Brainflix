import './SearchBox.scss'



function SearchBox () {
    return(

        <form className='Header__Form'>
            <input type="text" id='search' name='search' placeholder='search' className='Header__Input'/>
        </form>
    )
}

export default SearchBox;