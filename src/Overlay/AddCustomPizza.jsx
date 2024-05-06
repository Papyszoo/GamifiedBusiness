import { Dialog } from "primereact/dialog";
import { RadioButton } from "primereact/radiobutton";
import { Sauces } from "../Constants";
import React from "react";
import useNewCustomPizzaStore from "../stores/useNewCustomPizzaStore";
import { useShallow } from "zustand/react/shallow";

const AddCustomPizza = ({ visible, setVisible }) => {
    const { selectedSauce, setSauce } = useNewCustomPizzaStore(
        useShallow((state) => ({
            selectedSauce: state.sauce,
            setSauce: state.setSauce,
        }))
    );
    return (
        <Dialog
            header="Add Custom Pizza"
            visible={visible}
            style={{ width: "50vw" }}
            onHide={() => setVisible(false)}
        >
            <div className="flex flex-wrap gap-3">
                <label>Sauce:</label>
                {Object.keys(Sauces).map((sauce) => {
                    return (
                        <div key={sauce} className="flex align-items-center">
                            <RadioButton
                                inputId={sauce}
                                name="sauce"
                                value={sauce}
                                onChange={(e) => setSauce(e.value)}
                                checked={selectedSauce === sauce}
                            />
                            <label htmlFor={sauce} className="ml-2">
                                {sauce.charAt(0).toUpperCase() + sauce.slice(1)}
                            </label>
                        </div>
                    );
                })}
            </div>
        </Dialog>
    );
};

export default AddCustomPizza;
