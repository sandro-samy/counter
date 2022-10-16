const Button = ({ action, text, color }) => {
  return (
    <button
      onClick={action}
      className={`btn btn-primary text-capitalize mx-4 ${color}`}
    >
      {text}
    </button>
  );
};

export default Button;
