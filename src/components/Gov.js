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

const Gov=()=>
{

    const { currentAccount, connectWallet, handleChange, PayTax, formData} = useContext(TransactionContext);

    const handleSubmit = (e) => {
        e.preventDefault();
      const {addressTo } = formData;
  
     
  
      if (!addressTo ) return;
  
      PayTax();
    };

  return (
   
        <div className='registration-form'>
        
            <div className='col-12 my-5 mx-auto text-center' >
            <button
            type='button'
            className='btn btn-primary btn-lg btn-block'
            id="Cal"
            onClick={connectWallet}>Connect Wallet</button>
            </div>

            <form>
           
            <Input placeholder="Address To" name="addressTo" type="text"  handleChange={handleChange} />


            {/* <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} /> */}
                <div className="form-group">
                    <button type="button" className="btn btn-block create-account"  onClick={handleSubmit}>PayTax</button>
                </div>
            </form>
        </div>
)}
export default Gov;