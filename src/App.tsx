import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/otherFound/NotFound";
import ShadowPage from "./pages/shadow/ShadowPage";

function App() {
  return (
    <Routes>
      <Route path="/shadow" element={<ShadowPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
