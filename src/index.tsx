import NotificationLayout from "@layouts/NotificationLayout.tsx"
import { queryClient } from "@modules/app/api.ts"
import { QueryClientProvider } from "@tanstack/react-query"
import "katex/dist/katex.min.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { addStyles } from "react-mathquill"
import { RouterProvider } from "react-router-dom"
import "./index.scss"
import { router } from "./pages/router.tsx"

addStyles()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <NotificationLayout>
        <RouterProvider router={router} />
      </NotificationLayout>
    </QueryClientProvider>
  </StrictMode>
)
