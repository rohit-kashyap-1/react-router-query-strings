import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import User from './User';
import Users from './Users';

function App() {
  const styles = {
    links:{
      fontSize:'20px',
      fontWeight:600,
      textDecoration:'none',
      padding:'10px 20px',
      display:'block'
    }
  }
  return (
    <div className="App">
      <Router>
        {/* <Link style={styles.links} to="/user?page=1">Page 1</Link>
        <Link style={styles.links} to="/user?page=2">Page 2</Link>
        <Link style={styles.links} to="/user?page=3">Page 3</Link>
        <Link style={styles.links} to="/user?page=4">Page 4</Link> */}
      <Users />
        <Routes>
          {/* <Route path='/user' element={<User />}></Route> */}
          <Route path='/user' element={<User />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
