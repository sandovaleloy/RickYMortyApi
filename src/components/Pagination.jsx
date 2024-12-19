import { numbersPage } from "../utils/handlePagination";
import "./styles/Pagination.css";

const Pagination = ({
  setPage,
  RESIDENTS_PERPAGE,
  location,
  currentRange,
  setCurrentRange,
}) => {
  const handlePrev = () => {
    if (currentRange > 1) {
      setCurrentRange(currentRange - 1);
    }
  };

  const handleNext = () => {
    const maxPages = Math.ceil(location?.residents.length / RESIDENTS_PERPAGE);
    if (currentRange * 5 < maxPages) {
      setCurrentRange(currentRange + 1);
    }
  };

  const pageNumbers = numbersPage(location, RESIDENTS_PERPAGE, currentRange);

  return (
    <div className="pagination">
      <ul className="pagination__type">
        <li className="pagination__li" onClick={handlePrev}>
          {"<"}
        </li>

        {pageNumbers.map((numberPage) => (
          <li
            className="pagination__li"
            onClick={() => setPage(numberPage)}
            key={numberPage}
          >
            {numberPage}
          </li>
        ))}

        <li className="pagination__li" onClick={handleNext}>
          {">"}
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
