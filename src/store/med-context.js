import { createContext } from "react";

const MedContext = createContext({
    medicine : [],
    addMedicine : (med) => {},
    quantity:0,
    decreaseQuantity: (id) => {},
    

})

export default MedContext

