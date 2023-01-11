import { Routes,Route } from "react-router-dom";
import Firstpage from "./components/firstpage";
import Main from "./components/Main";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Firstpage/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/'/>
      </Routes>

    </div>
  );
}

export default App;
