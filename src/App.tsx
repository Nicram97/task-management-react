import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth/Auth";
import Login from "./Auth/Login"
import Register from "./Auth/Register";
import NoMatch from "./NoMatch/NoMatch";

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth><Login/></Auth>} />
          <Route path="/sign-in" element={<Auth><Login/></Auth>} />
          <Route path="/sign-up" element={<Auth><Register/></Auth>} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
