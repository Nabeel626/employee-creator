import { Link } from "react-router-dom";
import "../styling/home.scss";

function Home() {
  return (
    <>
      <div className="heading">
        <h1>Employee List</h1>
      </div>

      <div className="content">
        <div className="content-header">
          <p>Please click on 'Edit' to find more details of each employee.</p>
          <Link to={"/add-employee"}>
            <a>Add employee</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
