import { BrowserRouter } from "react-router-dom";

import Router from "./Router";
import { CyclesContextProvider } from "./contexts/CyclesContext";

import "./global.css";

<Router />;

function App() {
  return (
    <BrowserRouter>
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
    </BrowserRouter>
  );
}

export default App;
