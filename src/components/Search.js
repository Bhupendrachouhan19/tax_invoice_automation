
import React, {useState} from 'react';
import SearchImg from './SearchImg';
import './crypto.css'
function Search() {

const [img, setImg] = useState("")

const eventhandler = (event)=>
{
  const data = event.target.value;
  setImg(data);
}

  return (
    <div className='search'>
    <div id="box" >
    <input id="Cal" className='mx-5 my-5 py-3 px-3' classtype='text' placeholder='Search any image' value={img} onChange={eventhandler}></input>
    </div>
    <div className='images'>
    <SearchImg name={img}></SearchImg>
    </div>
    </div>
  )
}

export default Search;

import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';

import {contractABI, contractAddress} from '../Utils/Constants';

export const TransactionContext = React.createContext();

const {ethereum} = window;
///////
const getEthereumContract =()=>
{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractABI,signer);

    return transactionContract;

}

///////

export const TransactionProvider = ({children}) =>{
    
    
    const[currentAccount, setCurrentAccount]=useState(0)

    // after wallet connection 

    const[formData, setFormData] = useState({addressTo:'',amount:'',keyword:'', message:'' });
    const[isLoading, setIsLoading] = useState(false);
    const[transactionCount, setTransactionCount] = useState(0);
    
    
    const handleChange =(e,name)=>
    {
        setFormData((prevState)=>({...prevState, [name]:e.target.value}));

    

    }

    const checkIfWalletIsConnected = async () =>{
        try {
            if(!ethereum)
            return alert("Please install metamask");
        
            const accounts = await ethereum.request({method:'eth_accounts'});
            if(accounts.length)
            {
                setCurrentAccount(accounts[0])
            
            // getAllTransaction();
            }else{
                console.log("no accounts found");
            }
            
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.")
            
        }
        
            
        
    }
    
    const connectWallet  = async()=>
    {
        try {
            if(!ethereum)
            return alert("Please install metamask");
        
            const accounts = await ethereum.request({method:'eth_requestAccounts'});
           
                setCurrentAccount(accounts[0])
        
            
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.")
            
        }
    }

    /////

    const sendTransaction = async()=>{
      try {
        if(!ethereum)
        return alert("Please install metamask");
        // get data from the form...

        const{addressTo, amount, keyword, message}=formData;
        const transactionContract= getEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);
        await ethereum.request({
          method:'eth_sendTransaction',
          params:[{
            from:currentAccount,
            to:addressTo,
            gas:'0x5208', // in wei(21000)
            value: parsedAmount._hex, // 0.00001
          }]  

        })

        const transactionHash= await transactionContract.addToBlockchain(addressTo,parsedAmount,message,keyword);
        setIsLoading(true);
        console.log(`Loading-${transactionHash.hash}`);
        await transactionHash.wait();
        setIsLoading(false);
        console.log(`Success-${transactionHash.hash}`);

        const transactionCount = await transactionContract.getTransactionCount();
    } catch (error) {
        console.log(error);
            throw new Error("No ethereum object.") 
      }  
    }


    ///////

    useEffect(()=>{
    checkIfWalletIsConnected();    
    },[])
    return(
    <TransactionContext.Provider value={{connectWallet,currentAccount,formData,setFormData,sendTransaction,handleChange}}>
       {children} 
    </TransactionContext.Provider>
)
}