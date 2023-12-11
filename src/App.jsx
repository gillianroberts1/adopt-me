import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { StrictMode } from "react";

const App = () => {
  return (
    <StrictMode>
  <div>
    <h1>Adopt Me!</h1>
    <SearchParams />
  </div>
  </StrictMode>
)};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// export default App;
