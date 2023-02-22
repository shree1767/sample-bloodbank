import './App.css';
import { Donorsignup } from './Components/Donorsignup/Donorsignup';
import { Landing } from './Components/Landing/Landing';
import { Navbar } from './Components/Navbar/Navbar';
import { RSignup } from './Components/Receiversignup/Rsignup';

function App() {
  return (
    <>
      <Navbar/>
      {/* <Landing/> */}
      {/* <RSignup/> */}
      <Donorsignup/>
    </>
  );
}

export default App;
