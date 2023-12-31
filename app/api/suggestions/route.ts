export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const term = searchParams.get("term");

    //https://disneyclone1.azurewebsites.net/api/httptrigger1
    //https://disneyclone1.azurewebsites.net/api/getaisuggestion

    const res = await fetch(`https://disneyclone1.azurewebsites.net/api/getaisuggestion?term=${term}`,
        {
            method: "GET",
            next: {
                revalidate: 60 *60 *24, //24hrs
            },
        }
    );

    const message = await res.text();
    
    return Response.json({ message });
}