import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "~/components/shared/Header";
import Container from "@mui/material/Container";
const defaultTheme = createTheme();
function ClientPage() {
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

export default ClientPage;