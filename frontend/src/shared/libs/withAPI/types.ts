// main ====================================================== //
type withAPIType<T = any> = (
    path: RequestInfo | URL,
    options?: RequestInit
) => Promise<T | string> 

// export ==================================================== //
export type {withAPIType};