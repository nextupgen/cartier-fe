import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/shared/Header";
import Container from "@mui/material/Container";
import "./app.scss";
const defaultTheme = createTheme();
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <main>{/* TODO: update .... */}</main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
