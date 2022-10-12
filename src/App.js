import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { useNavigate } from "react-router-dom";
import { theme } from "./styles/theme";
import Router from "./utils/routes";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const hasToken = localStorage.getItem("access_token");
    if (hasToken) {
      navigate("/todos");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
