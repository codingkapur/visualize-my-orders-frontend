//Library imports
import { BsSearch } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import { useEffect, useRef } from "react";
const Toprow = ({
  searchState,
  handleSearchClick,
  toggleForm,
  handleSearchSubmit,
  getSearchText,
  searchField,
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
    <div className="toprow__container">
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
        <p className="btn sort-orders-btn operations-btn">Sort</p>
      </div>
    </div>
  );
};

export default Toprow;
