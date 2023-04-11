import { useEffect, useState } from "react";
import { Visibility } from "../Utils/Visibility";


export const useVisibilities = (elements) => {

    const _visibilities = []
    
    for (let i = 0; i < elements; i++) {
        _visibilities.push(new Visibility(i))
    }

    const [visibilities, setVisibilities] = useState(_visibilities);

    useEffect(() => {
        function tuneVisibility(id, value) {
            const visibility = findVisibility(id)
            if (visibility) {
                visibility.setVisibility(value)
                setVisibilities((old) => (
                    [...old.filter((obj) => obj.id !== id), visibility]
                ))
            }
        }

        function findVisibility(id) {
            return visibilities.find((obj) => obj.id === id)
        }

        tuneVisibility(0, 1)
        tuneVisibility(1, 0)

        const calculate = () => {
            const scrollPosition = window.pageYOffset


            const section = Math.floor(scrollPosition / 1000)

            const perc = scrollPosition % 1000 / 1000

            if (perc > 0) {
                tuneVisibility(section, 1 - perc)
                tuneVisibility(section + 1, perc)
            }
        }

        window.addEventListener("scroll", calculate);

        return () => window.removeEventListener("scroll", calculate);
    }, []);

    return visibilities;
};

