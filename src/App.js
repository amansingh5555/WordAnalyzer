import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

let name = " Singh";
function App() {
  return (
    <>
     
      <Navbar title = "TextUtils" abouttext = "About Us"/>
      <div className="container my-3"> 
      <TextForm heading = "Enter the text to analyze"/>
      </div>
      


    </>
  );
}

export default App;
