import React, {useState} from 'react';
import './Searchbar.css'



const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    const filteredClubs = props.clubs.filter((club) => {
            return club.includes(searchValue)
    })
    

    const shouldDisplayButton = searchValue.length > 0

    return (
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange} aria-label="Search" placeholder="Search"></input>
            {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
            <ul>
                {filteredClubs.map((club) => {
                    return <li key={club}>{club}</li>
                })}
            </ul>

        </div>
    )
}

export default SearchBar