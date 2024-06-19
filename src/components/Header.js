import React, { useContext } from 'react'
import MedContext from '../store/med-context'

const Header = () => {
    const ctx = useContext(MedContext)
  return (
    <React.Fragment>
       <div style={{display:"flex", justifyContent:"space-between", margin:"20px", borderBottom:"1px solid lightgray"}}>
       <div >INVENTORY MANAGEMENT APP</div>
       
       <div >cart : <span style={{fontSize:"20px", color:"red"}}>{ctx.quantity}</span></div>
       </div>
    </React.Fragment>
  )
}

export default Header