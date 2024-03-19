import App from "../src/App";
import { render } from "@testing-library/react";

test("Renders the main page", () => {
    render(<App />);
    expect(true).toBeTruthy();
});
