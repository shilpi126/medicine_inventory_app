import MedContext from './med-context'


import React, { useState } from 'react'

const MedicineProvider = (props) => {
    const [medicine, setMedicine] = useState([])
    const [countQuantity, setCountQuantity] = useState(0)

    const addMedicineData = (med) => {
        setMedicine([...medicine,med])
    }

    const decreaseQuantity = (id) => {
        
        const filteredData = medicine.map((item)=>{
            if(item.id == id){
                setCountQuantity(countQuantity + 1)
            return {...item, quantity: +item.quantity - 1} 
            }
            return item;
          })
          
          setMedicine(filteredData);

    }



    const medicine_context = {
        medicine:medicine,
        addMedicine:addMedicineData,
        quantity:countQuantity,
        decreaseQuantity
    }

  return (
    <MedContext.Provider value={medicine_context}>
        {props.children}
    </MedContext.Provider>
  )
}

export default MedicineProvider