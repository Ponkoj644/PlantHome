import { NavLink } from "react-router-dom";

const LeftSide = ({ item }) => {
  return (
    <>
      {/* Recent Update */}
      <h3>Recent Update</h3>
      <div className="single-update">
        <div className="image">
          <img src={item.image} alt="" />
        </div>
        <div className="text">
          <h4>{item.name}</h4>
          <p>{item.details}</p>
        </div>
      </div>
      <NavLink to="/plants" className="nav-link">
        View More Plants
      </NavLink>
      <hr />
    </>
  );
};

export default LeftSide;
