import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <p>
    <Link to="/">Home</Link> |
    <Link to="/counter">COUNTER</Link> |
    <Link to="/table">TABLE</Link> |
    <Link to="/math">MATH</Link>  |
    <Link to="/name">NAME</Link>  | 
    </p>
  )
}

export default Nav;
