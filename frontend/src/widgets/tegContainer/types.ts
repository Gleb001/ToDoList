// import =================================================== //
import type {FC} from "react";

// main ===================================================== //
interface Props { isPriority: boolean }
type TagContainer = FC<Props>

// export =================================================== //
export type {
    TagContainer,
    Props
};