import PageLayout from "@layouts/PageLayout"
import TipLayout from "@layouts/TipLayout"
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom"
import { Routes } from "../modules/app/constants"
import Compare from "./compare/Compare"

export const router = createBrowserRouter([
  {
    element: (
      <TipLayout>
        <PageLayout>
          <Outlet />
        </PageLayout>
      </TipLayout>
    ),
    errorElement: <Navigate to={Routes.COMPARE} replace />,
    children: [
      {
        path: Routes.COMPARE,
        element: <Compare />,
      },
    ],
  },
])
