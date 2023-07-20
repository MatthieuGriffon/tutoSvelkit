export async function GET() {
    const response = await fetch ('http://localhost:4000/postcodes');
    const postcodes = await response.json();
    const appPostCodes = postcodes.map(postcode => {
        return {
            postcode: postcode.postcode,
            line_1: postcode.line_1,
            line_2: postcode.line_2,
            line_3: postcode.line_3,
            post_town: postcode.post_town,
            longitude: postcode.longitude,
            latitude: postcode.latitude
        };
    });
    return new Response(JSON.stringify(appPostCodes), {
        headers: {
             "Content-Type": "application/json" 
        }
    });
}
