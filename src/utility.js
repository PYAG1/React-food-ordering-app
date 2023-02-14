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
    const [container,setcontainer]= useState([])


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
        setuser('')

    }

    const orderdata = collection(database,'Orders')

    const getOrderData = async ()=>{
        const value = await getDocs(orderdata)
        setcontainer(value.docs.map((item)=>{
          return {...item.data(),id:item.id}
         }))
    
      }

      const [historyObj, sethistoryObj] = useState({
        id: '',
        username: '',
        total: '',
        name: `Order`,
        currenttime: '',
        currentdate: '',
        items: []
        
        
        })



return <Logs.Provider value={{historyObj,sethistoryObj, getdocs,setdetails,details,userName,logout,user,userName,container,setcontainer,getOrderData}}>{children}</Logs.Provider>
    

}