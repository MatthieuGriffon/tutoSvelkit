import { error, redirect } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
    const { fetch, params, url, route  } = serverLoadEvent;
    console.log({ params, url, route: route.id})
    const { productId} = params;
    if (productId > 6 ) {
        //throw error (404, { message: 'Oh no! Looks like the product you are looking for does not exist.',
                            //hint: 'Try a different product id',
                            //});
        throw redirect(307, '/products');
        
    }
    const title ='Product details';
    const notification = 'End of season sale! 50 % off'
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const product = await response.json();
    return {
        title,
        product,
        notification
    };
}