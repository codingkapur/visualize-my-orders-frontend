//Library imports
import { BsSearch, BsThreeDots } from "react-icons/bs";
import { FiX } from "react-icons/fi";

const Toprow = ({ searchState, handleSearchClick }) => {
  return (
    <div className="toprow__container">
      <div className="toprow__searchbar--container">
        <form className="searchbar__form">
          {searchState ? (
            <FiX className="search__icon" onClick={handleSearchClick} />
          ) : (
            <BsSearch className="search__icon" onClick={handleSearchClick} />
          )}
          <input
            type="text"
            placeholder="Enter a Name"
            required
            autoFocus
            className={
              searchState ? "searchbar__input active" : "searchbar__input"
            }
          />
        </form>
      </div>
      <div className="toprow__operations--container">
        <p className="btn add-order-btn operations-btn">Add</p>
        <p className="btn edit-order-btn operations-btn">Edit</p>
        <p className="btn delete-order-btn operations-btn">Delete</p>
        <p className="btn sort-orders-btn operations-btn">Sort</p>
      </div>
    </div>
  );
};

export default Toprow;
