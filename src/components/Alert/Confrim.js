import React from "react";
import PropTypes from "prop-types";
import SweetAlert from "react-bootstrap-sweetalert";

export default function ConfrimAlert(props) {
  const { title, description, hideAlert, onConfirm } = props;

  return (
    <React.Fragment>
      <SweetAlert
        warning
        showCancel
        confirmBtnText="ยืนยัน !"
        cancelBtnText="ยกเลิก"
        confirmBtnBsStyle="danger"
        title={`${title ? title : "Are you sure"}`}
        onConfirm={onConfirm}
        onCancel={hideAlert}
        focusCancelBtn
      >
        {description && <h5>คุณต้องการลบรายการ {description} !</h5>}
      </SweetAlert>
    </React.Fragment>
  );
}

ConfrimAlert.propTypes = {
  title: PropTypes.string.isRequired,
  hideAlert: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};
