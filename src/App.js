import AddMedicine from "./components/AddMedicine";
import Header from "./components/Header";
import MedicineList from "./components/MedicineList";
import MedicineProvider from "./store/MedicineProvider";


function App() {
  return (
    <MedicineProvider>
      <Header/>
      <AddMedicine/>
      <MedicineList/>
    </MedicineProvider>
  );
}

export default App;
