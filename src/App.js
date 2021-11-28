import "./CSS/index.css";
import Card from "./Component/Card";
import { Link, Routes, Route } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";

function App() {
  return (
    <>
      <Card></Card>;

      {/* Arrow outside Card and when path="/detail" */}
      <Link to={"/"}>
        <Routes>
          <Route
            path="/detail"
            element={<ArrowLeft size={48} className="arrow" />}
          />
        </Routes>
      </Link>
    </>
  );
}

export default App;
