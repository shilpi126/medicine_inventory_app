import React, { useContext, useState } from 'react'
import MedContext from '../store/med-context'

const AddMedicine = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState()
    const [quantity, setQuantity] = useState()
    const ctx = useContext(MedContext)

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value)
    }

    const handleNameChange = (event) =>{
      setName(event.target.value)
    }

    const handlePriceChange = (event) => {
    setPrice(event.target.value)
    }

    const handleDesChange = (event) =>{
    setDescription(event.target.value)
    }
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const med = {
            id:Math.random(),
            name,
            description,
            price,
            quantity
        }
        
        ctx.addMedicine(med)

        setName("")
        setPrice("")
        setDescription("")
        setQuantity("")

    }


  return (
    <React.Fragment>
        <form onSubmit={handleFormSubmit} style={{margin:"3rem"}}>
            <label htmlFor="med_name">Medicine Name :</label>
            <input
            type='text'
            id="med_name"
            value={name}
            onChange={handleNameChange}
            />
            
            <label htmlFor='description'>Description :</label>
            <input
            type='text'
            id="description"
            onChange={handleDesChange}
            value={description}
        
            />
            <label htmlFor='price'>Price :</label>
            <input
            type='number'
            id="price"
            onChange={handlePriceChange}
            value={price}
            />
            <label htmlFor='quantity'>Quantity :</label>
            <input
            type='number'
            id="quantity"
            onChange={handleQuantityChange}
            value={quantity}
            />

            <button type="submit">Add Medicine</button>
        </form>
    </React.Fragment>
  )
}

export default AddMedicine