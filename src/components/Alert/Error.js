import React from "react";
import PropTypes from "prop-types";
import SweetAlert from "react-bootstrap-sweetalert";

export default function ErrorAlert(props) {
  const { title, description, hideAlert } = props;

  return (
    <React.Fragment>
      <SweetAlert
        error
        title=""
        onConfirm={() => hideAlert()}
        showConfirm={false}
      >
        <div className="color-black">{title && <h4>{title}</h4>}</div>
        {description && <h5>{description}</h5>}
        <label>I will close in 2 seconds.</label>
      </SweetAlert>
      <div style={{ display: "none" }}>
        {setTimeout(() => {
          hideAlert();
        }, 2000)}
      </div>
    </React.Fragment>
  );
}

ErrorAlert.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  hideAlert: PropTypes.func.isRequired,
};
