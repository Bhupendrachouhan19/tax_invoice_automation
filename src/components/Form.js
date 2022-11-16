import React,{useContext} from 'react'
import "./Form.css"

import { TransactionContext } from "./TransactionCrypto";




const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    className="form-control item fieldborder"
    
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
   
  />
)




const Form=()=>
{

    const { currentAccount, connectWallet, handleChange, PayToBuss, formData} = useContext(TransactionContext);

    const handleSubmit = (e) => {
        e.preventDefault();
      const { amount, addressTo, taxrate } = formData;
  
     
  
      if (!addressTo || !amount || !taxrate ) return;
  
      PayToBuss();
    };

  return (
   
        <div className='registration-form'>
            <form>
           
            <Input placeholder="Address To" name="addressTo" type="text"  handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Tax Rate" name="taxrate" type="number" handleChange={handleChange} />
            {/* <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} /> */}
                <div className="form-group">
                    <button type="button" className="btn btn-block create-account"  onClick={handleSubmit}>PayToBuss</button>
                </div>
            </form>
        </div>
)}
export default Form