// import =================================================== //
import { getUser } from "@app/redux/reducer/user";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { useAppSelector } from "@shared/hooks/useAppSelector"
import { useEffect } from "react";

// types ==================================================== //
type useColorThemeType = () => void

// main ===================================================== //
export const useColorTheme: useColorThemeType = () => {

    const dispatch = useAppDispatch();
    let theme = useAppSelector(state => state.user.data.theme);

    useEffect(() => {
        dispatch(
            getUser()
        )
    }, []);

    document.documentElement.style.cssText = `
        --primary-color:              ${theme === "light" ? "black" : "white"};
        --primary-backgound-color:    ${theme === "light" ? "white" : "black"};
        
        --disabled-task-color:        ${theme === "light" ? "#A3A3A3" : "#A3A3A3"};
        --secondary-background-color: ${theme === "light" ? "#E7E7E7" : "#676767"};
        --main-task-color:            ${theme === "light" ? "red" : "red"};
    `;

}