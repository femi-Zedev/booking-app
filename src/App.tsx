import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import "./fonts/style.css";
import "./fonts/SegoeUI.woff";
import "./fonts/SegoeUIBold.woff";
import "./fonts/SegoeUIBoldItalic.woff";
import "./fonts/SegoeUIItalic.woff";

import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import MainLayout from "./MainLayout";
import Flight from "./pages/Flight";
import Hotel from "./pages/Hotel";
import Car from "./pages/Car";
import Checkout from "./pages/Checkout";
import Result from "./pages/Result";
import CheckoutSuccess from "./pages/CheckoutSuccess";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <>Oups quelque chose s'est mal passé revenir en lieu sûr !</>,
      children: [
        {
          index: true,
          element: <Flight/> ,
        },
        {
          path: "flight",
          element: <Hotel />,
        },
        {
          path: "hotel",
          element: <Hotel />,
        },
        {
          path: "car",
          element: <Car/>,
        },
      ]
    },
    {
      path: "/checkout",
      element: <Checkout/>
    },
    {
      path: "/checkout-success",
      element: <CheckoutSuccess/>
    },
    {
      path: "/result",
      element: <Result />,
    },
  ]);

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}