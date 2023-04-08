// main =================================================== //
export default async function __shellRequest(
    request: Promise<Response>
) {
    return await request.then(response => {
        if (response.ok) return response.json();
        else throw new Error("Something wrong!");
    });
}