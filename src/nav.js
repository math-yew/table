import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <p>
    <Link to="/counter">COUNTER</Link> | 
    <Link to="/table">TABLE</Link>
    </p>
  )
}

export default Nav;
