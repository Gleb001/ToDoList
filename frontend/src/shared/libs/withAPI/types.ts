// main ====================================================== //
type ActionType = [
    "success" | "error",
    () => void
]
type withAPIType = (
    path: RequestInfo | URL,
    action?: ActionType,
    options?: RequestInit
) => Promise<Response | void>

// export ==================================================== //
export default withAPIType;
export {ActionType};