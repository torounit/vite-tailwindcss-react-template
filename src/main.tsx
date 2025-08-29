import { createRoot } from "react-dom/client";

import App from "./App";

const container = document.querySelector("#content");
if (!container) {
  throw new Error("No content container found");
} else {
  createRoot(container).render(<App />);
}
