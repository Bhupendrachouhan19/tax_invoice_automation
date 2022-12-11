import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Invoice.css";
import AddMore from "./AddMore";
import {useContext} from 'react'
import { TransactionContext } from "./TransactionCrypto";
import DateTime from "./DateTime";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


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

  const {connectWallet} = useContext(TransactionContext);


// print bill pdf function
  const printBill = () => {
    const input = document.getElementById("billSection");
    html2canvas(input, {logging: true, letterRendering: 1, useCORS: true}).then(canvas => {
      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const imgData = canvas.toDataURL('img/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 10, imgWidth, imgHeight)
      pdf.setFont('Helvertica', 'bold')
      pdf.text(95,7, 'Your Bill')
      pdf.setFont('Verdana', 'bold')
      pdf.text(95,52, '!! PAID !!')
      pdf.save("Your_Bill.pdf")
    })
  }

  return (
    <>
      <div className="main">

      {/* Wallet, print section */}
      <div className='d-flex justify-content-around flex-row ' >
            <button
            type='button'
            className='btn btn-primary btn-lg btn-block mt-3'
            id="Cal"
            onClick={connectWallet}>Connect Wallet</button>

              <button
                data-loading-text="Saving Invoice..."
                type="submit"
                name="invoice_btn"
                value={(subTotal*tax.tax)/100}
                className="btn btn-success btn-lg submit_btn invoice-save-btm mt-3"
                id="del"
                onClick={()=>{
                  // payTax();
                  printBill();
                }}
              >
                Print Bill
              </button>
          </div>
      
{/* Screenshot start*/}
      <div id="billSection">

      {/* FromTo Section */}
      <div className="d-flex flex-row justify-content-around fromTo">
        <div className="d-flex flex-row align-items-center ">
          <div className=" d-inline">
            <h1 className="">From,</h1>
            Ajeet Verma<br></br>
            Raipur 492001 India<br></br>
            1234567890<br></br>
            ajeet@gmail.com
          </div>
          <div className=" d-inline p-3 ">
            <h1 className="">To,</h1>
            <div className="">
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

            <center className="d-flex flex-row align-items-center">
              <DateTime/>
            </center>
          
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



        {/* OrderList Section */}
        <div className="row  mx-3">
          <div className="col-12">
          <p className="h1 my-5 mb-5"><mark><b>- - - Order List - - -</b></mark></p>

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
        <div className="h-100 d-inline-block">
        </div>
      </div>
{/* Screenshot end */}

      </div>
    </>
  );
}

export default Invoice;
