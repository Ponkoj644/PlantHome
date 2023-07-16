import "./SectonHeading.css";

const SectonHeading = (props) => {
  return (
    <div className="section-heading hover-underline-animation">
      <h1 className="mb-4">{props.heading}</h1>
    </div>
  );
};

export default SectonHeading;
