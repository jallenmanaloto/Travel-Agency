import { useState } from "react";
import "./App.css";
import { ActiveDrawer } from "./context/Drawer";
import Head from "./components/landing/header/Head";

function App() {
  //setting context value
  const [drawerActive, setDrawerActive] = useState(false);

  return (
    <ActiveDrawer.Provider value={{ drawerActive, setDrawerActive }}>
      <div className="App">
        <Head />
      </div>
    </ActiveDrawer.Provider>
  );
}

export default App;
