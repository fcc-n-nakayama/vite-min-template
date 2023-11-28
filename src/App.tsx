import "@mantine/core/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomerRegistration } from "./CustomerRegistration.tsx";
import { CustomerConfirmation } from "./CustomerConfirmation.tsx";

 
export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<CustomerRegistration />} />
        <Route path={`/CustomerConfirmation/`} element={<CustomerConfirmation />} />
      </Routes>
    </BrowserRouter>
  )
}
