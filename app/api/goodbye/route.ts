export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    return new Response('Goodbye, from server side!')
}