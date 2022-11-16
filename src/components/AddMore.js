import React,{useState} from "react";

const AddMore = ({subTotal,setSubtotal}) => {

  const [total, setTotal] = useState({
    itemNo:" ",
    itemName:" ",
    quantity: " ",
    price: " ",
    Total:" "
  })

  const handler = (e)=>
  {
    const name = e.target.name;
    const value = e.target.value;

    const newValues={...total,[name]:value};
    setTotal(newValues);

    const newTotal = () =>{
      let old_value = subTotal
      old_value = old_value + newValues.quantity*newValues.price;
      setSubtotal(old_value)
       localStorage.setItem('subtotal',old_value)
    }
    newTotal();
    
  }



  return (
    <>
    
      <tr>
        <td>
          <input className="itemRow" type="checkbox"></input>
        </td>
        <td>
          <input
            type="text"
            name="itemNo"
            id="Cal"
            className="form-control "
            onChange={handler}
            value={total.itemNo}
          ></input>
        </td>
        <td>
          <input
            type="text"
            name="itemName"
            id="Cal"
            className="form-control"
            onChange={handler}
            value={total.itemName}
          ></input>
        </td>
        <td>
          <input
            type="number"
            name="quantity"
            id="Cal"
            className="form-control quantity"
            onChange={handler}
            value={total.quantity}
          ></input>
        </td>
        <td>
          <input
            type="number"
            name="price"
            id="Cal"
            className="form-control price"
            onChange={handler}
            value={total.price}
          ></input>
        </td>
        <td> 
          <input
            type="number"
            name="Total"
            id="Cal"
            className="form-control total"
            onChange={handler}
         
            value={total.Total=total.quantity*total.price} 
          ></input>
        </td>
      </tr>
    </>
  );
};

export default AddMore;
