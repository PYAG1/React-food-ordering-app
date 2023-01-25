import React from "react";
import { Routes,Route } from "react-router-dom";
import All from "./components/All";
import Extrainfo from "./components/extrainfo";
import Firstpage from "./components/firstpage";
import Fooddetail from "./components/fooddetail";
import Main from "./components/Main";
//import Newpage from "./components/newpage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
const Lazyabout = React.lazy(()=>import("./components/newpage"));


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Firstpage/>}/>
        <Route path='/thanks' element={<All/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/extra ' element={<Extrainfo/>}/>
        <Route path='/main/:userId' element={<Fooddetail/>}/>

        <Route path="/new" element={<React.Suspense fallback='loading....'><Lazyabout/></React.Suspense>}>
        <Route index element={<Signup/>}/>

<Route path='signup' element={<Signup/>}/>
<Route path='signin' element={<Signin/>}/>

        </Route>

      
      </Routes>

    </div>
  );
}

export default App;
