import { Route, Routes } from "react-router";
import { InfinityScroll } from "./pages/InfinityScroll";
import { Salary } from "./pages/Salary";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout childrem={<InfinityScroll />} />} />
      <Route path="/salary" element={<Layout childrem={<Salary />} />} />
    </Routes>
  );
}

export default App;
