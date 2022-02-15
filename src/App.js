import { useState } from "react";
import "./App.css";
import { ActiveDrawer } from "./context/Drawer";
import Head from "./components/landing/header/Head";
import Info from "./components/landing/info/Info";

function App() {
  //setting context value
  const [drawerActive, setDrawerActive] = useState(false);

  return (
    <ActiveDrawer.Provider value={{ drawerActive, setDrawerActive }}>
      <div className="App">
        <Head />
        <Info />
      </div>
    </ActiveDrawer.Provider>
  );
}

export default App;
