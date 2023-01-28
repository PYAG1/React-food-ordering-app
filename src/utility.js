import { createContext, useContext, useState } from "react";
import { collection } from "firebase/firestore";
import { database } from "./components/firebase";
import { getDocs } from "firebase/firestore";

const Logs = createContext();

export const UseLog= ()=>{
    return useContext(Logs)
}




export const AppProvider= ({children})=>{
    const [details,setdetails]= useState([])
    const [user,setuser]= useState('');


    const data= collection(database,'users');

    const getdocs = async ()=>{
        const values= await getDocs(data);
        setdetails(values.docs.map((item)=>{
         return {...item.data(),id:item.id}
        }))}

        
    function userName(value){
        setuser(value)
    }

    function logout(value){
        setuser(null)

    }



return <Logs.Provider value={{getdocs,setdetails,details,userName,logout,user,userName}}>{children}</Logs.Provider>
    

}