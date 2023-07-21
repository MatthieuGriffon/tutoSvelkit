import Product from './product.svelte'
export const load = async (loadEvent) => {
    console.log("Load function called in page.server.js");

    const notification = 'End of season sale!';
    const { data } = loadEvent;  
    return {
        ...data,
        Component: Product,
        notification
    };
};