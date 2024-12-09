import "katex/dist/katex.min.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.scss"
import App from "./shared/App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
