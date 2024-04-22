import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-dark-teal/theme.css";
import ReactDOM from "react-dom/client";
import App from "./App";
if (import.meta.hot) {
    import.meta.hot.accept(() => {
        import.meta.hot.invalidate();
    })
}
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
