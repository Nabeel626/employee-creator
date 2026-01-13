import { Link } from "react-router-dom";
import "../../styling/employeeCard.scss";

const EmployeeCard = () => {
  return (
    <div className="employeeCard__container">
      <hr className="employeeCard__splitter" />
      <div className="employeeCard__grid">
        <p className="employeeCard__name">Bob</p>
        <p className="employeeCard__contract">Contract - 2yrs</p>
        <p className="employeeCard__email">John.smith@email.com</p>
        <div className="employeeCard__manage">
          <Link to={"/edit-employee"}>
            <a>Edit</a>
          </Link>
          <Link to={"/delete"}>
            <a>Delete</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
