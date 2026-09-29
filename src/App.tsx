import {
  Container,
  CssBaseline
} from "@mui/material";

import Counter from "./components/Counter";

function App() {
  return (
    <>
      <CssBaseline />

      <Container sx={{ mt: 5 }}>
        <Counter />
      </Container>
    </>
  );
}

export default App;