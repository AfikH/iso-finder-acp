import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import MainLayout from "@/layouts/MainLayout";
import { BreadcrumbHandle } from "@/components/app/AppBreadcrumb";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <NotFound />,
        handle: { crumb: "Home" } satisfies BreadcrumbHandle,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={browserRouter}></RouterProvider>;

export default Router;
