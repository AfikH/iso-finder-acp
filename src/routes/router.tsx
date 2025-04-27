import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import MainLayout from "@/components/app/layout/mainLayout";
import { BreadcrumbHandle } from "@/components/app/layout/mainLayout/AppBreadcrumb";
import Table from "@/pages/Table";

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
      {
        path: "table",
        element: <Table />,
        handle: { crumb: "Table" } satisfies BreadcrumbHandle,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={browserRouter}></RouterProvider>;

export default Router;
