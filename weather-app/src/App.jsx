import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherApp from "./pages/WeatherApp";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Jikan from "./pages/Jikan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/jikan" element={<Jikan />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
