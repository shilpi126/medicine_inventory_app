import React, { useContext } from 'react'
import MedContext from '../store/med-context'

const MedicineList = () => {
    const ctx = useContext(MedContext)

     const handleCartClick = (event) => {
         ctx.decreaseQuantity(event.target.id)
     }
     
  return (
    <React.Fragment>
        <ul style={{margin:"5rem"}}>
            {ctx.medicine.map((item, index) => {
                return (
                    <li key={index+1} style={{display:"flex", justifyContent:"space-between", margin:"10px"}}>
                        <div>{item.name}</div>
                        <div>{item.description}</div>
                        <div>{item.price}</div>
                        <div>{item.quantity}</div>
                        {item.quantity > 0 
                        ? 
                        <button id={item.id} onClick={handleCartClick}>Add To Cart</button> 
                        : 
                        <button id={item.id} onClick={handleCartClick} disabled >Out of stock</button>

                    }
                    </li>
                )
            })}
        </ul>
    </React.Fragment>
 
  )
}

export default MedicineList