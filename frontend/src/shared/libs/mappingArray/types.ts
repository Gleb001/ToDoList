// import =================================================== //
import type { ReactNode, FC } from "react";

// main ===================================================== //
type DataComponent<Type> = Type & { id: any }
type mappingArray = <Type>(
    array: DataComponent<Type>[],
    Component: FC<Type>
) => ReactNode

// export =================================================== //
export type { mappingArray };