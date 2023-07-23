import React, { ReactNode, FC } from "react";

type mappingArrayType = <Type>(
    array: (Type)[],
    comopnent: (arg0: Type) => ReactNode
) => ReactNode

// export const mappingArray: mappingArrayType = (array, component) => (
//     <>{
//         array.map(item => {
//             component(item);
//         })
//     }</>
// )
export const mappingArray: <Type>(array: (Type & {id: string | number})[], Component: FC<Type>) => ReactNode = (array, Component) => (
    <>{
        array.map(item => {
            <Component key={item.id} {...item} />;
        })
    }</>
)