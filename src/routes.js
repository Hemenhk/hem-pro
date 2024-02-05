import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import TheHomePage from "./pages/TheHomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {index: true, element: <TheHomePage />}
        ]
    }
])