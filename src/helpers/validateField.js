export default function hanndelChange(event, type, minValue, maxValue) {
  const hanndel = () => {
    switch (type) {
      case "email":
        if (verifyEmail(event.target.value)) {
          return true;
        } else {
          return false;
        }
      case "password":
        if (verifyLength(event.target.value, minValue)) {
          return true;
        } else {
          return false;
        }
      case "min-max":
        if (
          verifyLength(event.target.value, minValue) &&
          !verifyLength(event.target.value, maxValue)
        ) {
          return true;
        } else {
          return false;
        }
      case "min-max-number":
        if (
          verifyLength(event.target.value, minValue) &&
          !verifyLength(event.target.value, maxValue) &&
          verifyNumber(event.target.value)
        ) {
          return true;
        } else {
          return false;
        }
      case "url":
        if (verifyUrl(event.target.value)) {
          return true;
        } else {
          return false;
        }
      case "number":
        if (verifyNumber(event.target.value)) {
          return true;
        } else {
          return false;
        }
      default:
        break;
    }
  };

  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };

  const verifyEmail = (value) => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value.trim())) {
      return true;
    }
    return false;
  };

  const verifyNumber = (value) => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };

  const verifyUrl = (value) => {
    try {
      new URL(value);
      return true;
    } catch (_) {
      return false;
    }
  };

  return hanndel(event, type, minValue, maxValue);
}
