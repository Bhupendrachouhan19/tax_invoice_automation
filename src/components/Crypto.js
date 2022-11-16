import React, { useContext } from 'react'
import { TransactionContext } from './TransactionCrypto'
import './crypto.css'
import Form from './Form'

function Crypto() {
  const {connectWallet} = useContext(TransactionContext)

  return (
    <center>
    <div className='cont'>
    <div className='row'>
    
    <div className='col-12 my-5 mx-auto' >
    <button
    type='button'
    className='btn btn-primary btn-lg btn-block'
    id="Cal"
    onClick={connectWallet}>Connect Wallet</button>

    </div>
    
    
     <div className="col-3 offset-3 my-5" >
            <span className="form-inline">
              <div className="form-group">
                <label id="label">Total Amount:</label>
                <div className="input-group">
                  <div className="input-group-text">₹</div>
                  <input
                    type="number"
                    className="form-control"
                    name="subTotal"
                    id="Cal"
                    placeholder="subtotal"
                   value={localStorage.getItem("overall")}
                  ></input>
                </div>
              </div>
            </span>
          </div>

          <div className="col-3 my-5">
            <span className="form-inline">
              <div className="form-group">
                <label id="label">Tax Amount:</label>
                <div className="input-group">
                  <div className="input-group-text">₹</div>
                  <input
                    type="number"
                    className="form-control"
                    name="subTotal"
                    id="Cal"
                    placeholder="subtotal"
                   value={localStorage.getItem("taxamt")}
                  ></input>
                </div>
              </div>
            </span>
          </div>
        </div>
        <Form></Form>
        </div>

      </center>
  )
}

export default Crypto