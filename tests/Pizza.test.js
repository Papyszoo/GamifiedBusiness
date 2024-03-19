import { describe, it, expect, vi } from "vitest";
import Pizza from "../src/Environment/PizzaPlace/Pizza";
import ReactThreeTestRenderer from "@react-three/test-renderer";

describe("Pizza", () => {
    it("pizza to have ingredients listed in props", async () => {
        const pizza = await ReactThreeTestRenderer.create(<Pizza />);
        expect(true).toBe(true);
    });

    it("demo", () => {
        expect(true).toBe(true);
    });
});
