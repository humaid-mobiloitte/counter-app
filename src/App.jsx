import Counter from './assets/counter.jsx'
import { Box } from "@mui/material";
function App() {

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Counter />
    </Box>
  )
}

export default App
