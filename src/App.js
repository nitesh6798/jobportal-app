import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login'
import SignUp from './component/SignUp'
import JobPortal from './component/JobPortal'
import Rejected from './component/Rejected'
import ShortListed from './component/ShortListed'
import ProfileInfo from './component/ProfileInfo'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/jobportal" element={<JobPortal/>}/>
          <Route path="/rejected" element={<Rejected/>}/>
          <Route path="/shortlisted" element={<ShortListed/>}/>
          <Route path="/profile/:id" element={<ProfileInfo/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
