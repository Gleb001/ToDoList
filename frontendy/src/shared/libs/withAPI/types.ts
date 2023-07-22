// main ====================================================== //
type withAPIType = <Type>(
    path: RequestInfo | URL,
    options?: RequestInit
) => Promise<Type>

// export ==================================================== //
export default withAPIType;