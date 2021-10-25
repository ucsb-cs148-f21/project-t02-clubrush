import React, { useState } from "react";
import "./Searchbar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  // const getClub = (e) => {
  //   console.log("test");
  //   console.log(e.currentTarget.href);
  //   console.log(e.currentTarget.children[0].textContent);
  // }

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
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} rel="noreferrer" target="_blank">
                <p>{value.title} </p>

               {/* <a className="dataItem" href={value.link} rel="noreferrer" target="_blank" onClick={getClub}> */}
                {/* <p onClick={getClub}>{value.title} </p> */}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;