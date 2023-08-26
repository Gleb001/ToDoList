// import =================================================== //
import type { FC } from "react";

// main ===================================================== //
type DescriptionTaskType = FC<{
    value: string,
    change: (...args: any) => void,
}>

// export =================================================== //
export default DescriptionTaskType;