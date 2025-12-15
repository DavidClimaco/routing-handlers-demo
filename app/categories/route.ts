export const dynamic = "force-static";

export async function GET() {
    const categories = [
        {id: 1, name: 'Electronics'},
        {id: 2, name: 'Books'},
        {id: 3, name: 'Clothing'},
        {id: 4, name: 'Home'},
        {id: 5, name: 'Beauty'},
        {id: 6, name: 'Sports'},
        {id: 7, name: 'Toys'},
    ];
    return Response.json(categories);
}
