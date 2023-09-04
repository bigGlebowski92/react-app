type ButtonProps = {
  text: 'Close' | 'Add';
  className: string;
  onClick: any;
  color: string;
};

const Button = ({ text, className, onClick, color }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onClick}
      style={{ background: color }}
    >
      {text}
    </button>
  );
};

export default Button;
