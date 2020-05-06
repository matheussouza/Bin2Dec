import React from "react";

const InputFeedback = props => {
  const { visible, message } = props;
  if (!visible) return <></>;

  return <small className="validation-feedback">{message}</small>;
};

export default InputFeedback;
