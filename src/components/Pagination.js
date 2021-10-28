import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "./Pagination.css";
import { ORDERS_PER_PAGE } from "../utils/constants";

const Pagination = ({
  ordersList,
  totalPages,
  page,
  handleLeftClick,
  handleRightClick,
}) => {
  return (
    <div className="pagination__container">
      <FiChevronLeft
        className="arrow__icon"
        onClick={() => handleLeftClick()}
      />
      <p className="pagination__btn current-page__btn">{page}</p>
      <p>of</p>
      <p className="pagination__btn">{totalPages}</p>
      <FiChevronRight
        className="arrow__icon"
        onClick={() => handleRightClick()}
      />
    </div>
  );
};

export default Pagination;
