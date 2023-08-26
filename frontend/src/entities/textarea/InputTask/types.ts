// import =================================================== //
import {FC} from "react";

// main ===================================================== //
type TitleTaskType = FC<{
    value: string,
    change: (...args: any) => void
}>

// export =================================================== //
export default TitleTaskType;