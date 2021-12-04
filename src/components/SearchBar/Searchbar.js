import React, { useState, useEffect } from "react";
import "./Searchbar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const website = process.env.REACT_APP_website
  const frontend = process.env.REACT_APP_frontend
  console.log(frontend)
  // fetch data from database
  const [fetchdata, setData] = useState([]);
  useEffect(() => {
    fetch(`${website}/clubs/`)
      .then(async (res) => {
        const fetchdata = await res.json();
        setData(fetchdata)
      }
    );
  },[]);

  //const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setData([]);
    } else {
      setData(newFilter);
    }
  };

  const clearInput = () => {
    setData([]);
    setWordEntered("");
  };
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {fetchdata.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {wordEntered.length !== 0 && (
        <div className="dataResult">
          {fetchdata.slice(0, fetchdata.length).map((value, key) => {
            return (
              <a className="dataItem" href={`${frontend}/club/` + value.name} rel="noreferrer" target="_blank">
                <p>{value.name} </p>

               {/* <a className="dataItem" href={value.link} rel="noreferrer" target="_blank" onClick={getClub}> /}
                {/ <p onClick={getClub}>{value.title} </p> */}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;