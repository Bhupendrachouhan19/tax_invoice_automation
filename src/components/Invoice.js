import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Invoice.css";
import AddMore from "./AddMore";
function Invoice() {
  const [inputList, setInputList] = useState([]);
  const [subTotal,setSubtotal] = useState(0)
  const [tax, setTax] = useState({
    tax:" ",
    tax_amt:" ",
    total:" "
  })
 
  const AddItem = () => {
    setInputList(inputList.concat(<AddMore key={inputList.length} setSubtotal={setSubtotal} subTotal={subTotal} />));
    
  };

 
  const DelItem = (e)=>
  {
    if(inputList.length===1){}
    else
    setInputList((products) => products.filter((_, key) => key !== 0));
  }
  

  const changeHandler = (e)=>
  {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setInputList({...inputList,[name]:value});
    
    
  }
  const Handler = (e)=>
  {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    const newTax = {...tax,[name]:value}
    setTax(newTax);
    let overall = subTotal+(subTotal*newTax.tax)/100;
    localStorage.setItem('overall',overall);
    let tax_amt = (subTotal*newTax.tax)/100;
    localStorage.setItem('taxamt',tax_amt);
  
    
  }

  

  
  return (
    <>
      <div className="main">
        <div className="row mx-3 ">
          <div className="col-5 offset-1 ">
            <h1 className="pt-5">From,</h1>
            Ajeet Verma<br></br>
            Raipur 492001 India<br></br>
            1234567890<br></br>
            Ajeet@gmail.com<br></br>
            
          </div>
          <div className="col-5 offset-1">
            <h1 className="pt-5">To</h1>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="companyName"
                id="companyName"
                placeholder="Company Name"
            
              ></input>
            </div>
            <div className="form-group mt-2">
              <textarea
                className="form-control"
                rows="3"
                name="address"
                id="address"
                placeholder="Your Address"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row mt-5 mx-3">
          <div className="col-12">
            <table className="table table-bordered table-hover">
              <tbody>
                <tr>
                  <th className="w-2%">
                    <input
                      className="form-group"
                      type="checkbox"
                      id="checkb"
                    ></input>
                  </th>
                  <th className="w-15%">Item No</th>
                  <th className="w-38%">Item Name</th>
                  <th className="w-15%">Quantity</th>
                  <th className="w-15%">Price</th>
                  <th className="w-15%">Total</th>
                </tr>
                {inputList}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row mx-3">
          <div className="col-3 my-3">
            <button type="button" className="btn btn-danger  offset-1" id="del" onClick={DelItem}>Delete</button>
            <button type="button" class="btn btn-success offset-1" id="del" onClick={AddItem}>
              Add Item
            </button>
          </div>
        </div>
        <div className="row mx-3 mt-5">
          <div className="col-8">
            <h1>Notes :</h1>
            <div className="formgroup">
              <textarea
                className="form-control txt"
                rows="5"
                name="notes"
                id="Cal"
                placeholder="Your Notes"
              ></textarea>
            </div>
            <br></br>
            <div className="form-group">
              <button
                data-loading-text="Saving Invoice..."
                type="submit"
                name="invoice_btn"
                value="Save Invoice"
                className="btn btn-success submit_btn invoice-save-btm"
                id="del"
              >
                Print Bill
              </button>
            </div>
          </div>

          <div className="col-2 offset-2">
            <span className="form-inline">
              <div className="form-group">
                <label>SubTotal:</label>
                <div className="input-group">
                  <div className="input-group-text">₹</div>
                  <input
                    type="number"
                    className="form-control"
                    name="subTotal"
                    id="Cal"
                    placeholder="subtotal"
                    onChange={changeHandler}
                   value={subTotal}
                  ></input>
                </div>
              </div>
              <div className="form-group">
                <label>Tax Rate:</label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    name="tax"
                    id="Cal"
                    onChange={Handler}
                    value={tax.tax}
                  ></input>
                  <div className="input-group-text">%</div>
                </div>
              </div>
              <div className="form-group">
                <label>Tax Amount:</label>
                <div className="input-group">
                  <div className="input-group-text">₹</div>
                  <input  
                    type="number"
                    className="form-control"
                    name="tax-amount"
                    id="Cal"
                    onChange={Handler}
                    value={(subTotal*tax.tax)/100}
                  ></input>
                </div>
              </div>
              <div className="form-group">
                <label>Total:</label>
                <div className="input-group">
                  <div className="input-group-text">₹</div>
                  <input
                  
                    type="number"
                    className="form-control"
                    name="Total"
                    id="Cal"
                    placeholder="Total"
                    onchange={Handler}
                    value={subTotal+(subTotal*tax.tax)/100}
                  ></input>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invoice;
