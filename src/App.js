import { useState } from "react";
import "./App.css";
import { ActiveDrawer } from "./context/Drawer";
import Explore from "./components/landing/explore/Explore";
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
        <Explore />
      </div>
    </ActiveDrawer.Provider>
  );
}

export default App;
