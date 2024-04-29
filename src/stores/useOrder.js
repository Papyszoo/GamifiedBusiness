import { create } from "zustand";

export default create((set, get) => ({
    order: [],
    orderCreated: null,
    orderCompletesOn: null,
    makeOrder: (order) => {
        set({
            order,
            orderCreated: Date.now(),
            orderCompletesOn: new Date(Date.now().getTime() + 15 * 60 * 1000),
        });
    },
    resetOrder: () => {
        set({
            order: [],
            orderCreated: null,
            orderCompletesOn: null,
        });
    },
}));
