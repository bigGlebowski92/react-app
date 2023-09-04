import { useInputContext } from '../../context/useInputContext';
import Button from '../button/Button';

const Header = () => {
  const { showInput, setShowInput } = useInputContext();
  return (
    <header>
      <h1>Task Tracker</h1>
      <Button
        text={showInput ? 'Close' : 'Add'}
        className="btn"
        color={showInput ? 'red' : 'green'}
        onClick={() => setShowInput(!showInput)}
      />
    </header>
  );
};

export default Header;
