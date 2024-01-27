import Header from "./Components/header/Header";
import MainContent from "./Components/mainContent/MainContent";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Components/Theme";
import { useState } from "react";
function App() {
  const [theme, colorMode] = useMode();
  const[showSidebar,setshowSidebar]=useState('none')

  return (
    <div>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header showSidebar={showSidebar} setshowSidebar={setshowSidebar} />
          <MainContent showSidebar={showSidebar} setshowSidebar={setshowSidebar}/>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
