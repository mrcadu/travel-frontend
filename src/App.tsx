import React from 'react';
import MarkerTable from "./components/MarkerTable";
import {Box} from "@mui/material";

function App() {
  return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <MarkerTable/>
    </Box>
  );
}

export default App;
