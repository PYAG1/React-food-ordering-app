import { Routes,Route } from "react-router-dom";
import Firstpage from "./components/firstpage";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Firstpage/>}/>
      </Routes>

    </div>
  );
}

export default App;
