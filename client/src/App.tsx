import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Honeytokens from "./pages/Honeytokens";
import Alerts from "./pages/Alerts";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/honeytokens" element={<Honeytokens />}></Route>
          <Route path="/alerts" element={<Alerts />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
