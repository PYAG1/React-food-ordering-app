import { Routes,Route } from "react-router-dom";
import Extrainfo from "./components/extrainfo";
import Firstpage from "./components/firstpage";
import Fooddetail from "./components/fooddetail";
import Main from "./components/Main";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Firstpage/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/extra ' element={<Extrainfo/>}/>
        <Route path='/main/:userId' element={<Fooddetail/>}/>
      </Routes>

    </div>
  );
}

export default App;
