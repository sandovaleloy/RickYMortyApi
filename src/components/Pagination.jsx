import { numbersPage } from "../utils/handlePagination";
import "./styles/Pagination.css";

const Pagination = ({
  setPage,
  RESIDENTS_PERPAGE,
  location,
  numberPage,
  hanleSubmit,
}) => {
  return (
    <div className="pagination">
      <ul className="pagination__type">
        {numbersPage(location, RESIDENTS_PERPAGE).map((numberPage) => (
          <li
            className="pagination__li"
            onClick={() => setPage(numberPage)}
            key={numberPage}
          >
            {" "}
            {numberPage}
          </li>
        ))}
        <form>
          <button
            onClick={hanleSubmit}
            className="bx bx-chevrons-right"
          ></button>
        </form>
      </ul>
    </div>
  );
};

export default Pagination;
