import "./SubHeader.css";

function SubHeader({ image, heading }) {
  return (
    <div className="sub-header">
      <img src={image} alt="" className="w-100" />
      <h1 className="heading">{heading}</h1>
    </div>
  );
}

export default SubHeader;
