//Library imports
import { BsSearch } from "react-icons/bs";
import { FiChevronDown, FiX } from "react-icons/fi";
import { useEffect, useRef } from "react";

//Style Import
import "./Toprow.css";

//Component Imports
import SortOptions from "./SortOptions";

const Toprow = ({
  searchState,
  handleSearchClick,
  toggleForm,
  handleSearchSubmit,
  getSearchText,
  searchField,
  handleSortClick,
  sortOptionsMenu,
}) => {
  const searchInput = useRef(null);

  useEffect(() => {
    focusOnClick();
  }, [searchState]);

  const focusOnClick = () => {
    if (searchState) {
      searchInput.current.focus();
    } else {
      searchInput.current.blur();
    }
  };

  return (
    <div
      className={
        sortOptionsMenu ? "toprow__container sort-options" : "toprow__container"
      }
    >
      <div className="toprow__searchbar--container">
        <form
          className="searchbar__form"
          onSubmit={(e) => handleSearchSubmit(e)}
        >
          {searchState ? (
            <FiX className="search__icon" onClick={handleSearchClick} />
          ) : (
            <BsSearch className="search__icon" onClick={handleSearchClick} />
          )}
          <input
            value={searchField}
            onChange={(e) => getSearchText(e)}
            ref={searchInput}
            type="text"
            placeholder="Enter a Name"
            required
            className={
              searchState ? "searchbar__input active" : "searchbar__input"
            }
          />
        </form>
      </div>
      <div className="toprow__operations--container">
        <p className="btn add-order-btn operations-btn" onClick={toggleForm}>
          Add
        </p>
        <p className="btn edit-order-btn operations-btn">Edit</p>
        <p className="btn delete-order-btn operations-btn">Delete</p>
        <div
          className="btn sort__container operations-btn"
          onClick={handleSortClick}
        >
          <p className="sort-orders-btn">Sort</p>
          <FiChevronDown
            className={
              sortOptionsMenu
                ? "sort__options--icon right"
                : "sort__options--icon"
            }
          />
        </div>
      </div>
      {sortOptionsMenu && <SortOptions />}
    </div>
  );
};

export default Toprow;
