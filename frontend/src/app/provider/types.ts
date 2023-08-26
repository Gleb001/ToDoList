// import =================================================== //
import type { JSX } from "react";

// main ===================================================== //
type ProviderType = (
    component: () => React.ReactNode
) => JSX.Element

// export =================================================== //
export type { ProviderType };