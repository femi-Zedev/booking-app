import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Booking from "./pages/Booking";

export default function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
