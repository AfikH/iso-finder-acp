import Router from "@/routes/router";
import { ThemeProvider } from "./components/app/providers/ThemeProvider";

const App = () => (
  <ThemeProvider>
    <Router />
  </ThemeProvider>
);

export default App;
