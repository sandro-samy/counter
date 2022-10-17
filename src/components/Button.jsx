const Button = ({ action, text, className }) => {
  return (
    <button
      onClick={action}
      className={`btn btn-primary text-capitalize ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
