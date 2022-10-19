const Button = ({ action, text, className, disabled }) => {
  return (
    <button
      onClick={action}
      disabled={disabled}
      className={`btn btn-primary text-capitalize ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
