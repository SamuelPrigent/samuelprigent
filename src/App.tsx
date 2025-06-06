import { Route, Routes } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import CvPage from "./pages/CvPage";

function App() {
  return (
    <Routes>
      <Route path="/samuelprigent" element={<HomePage />} />
      <Route path="samuelprigent/cv" element={<CvPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
