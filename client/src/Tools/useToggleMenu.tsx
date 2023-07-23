import { useState } from "react";


const useToggleMenu = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return {
        toggleMenu,
        setToggleMenu
    }

}
export default useToggleMenu;