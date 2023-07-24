import { DB_USER, DB_PASSWORD } from '$env/static/private'

import { redirect } from '@sveltejs/kit';
import { secretKey } from '$lib/server/secret'


export const load = ({ cookies, url }) => {
    console.log( {secretKey})
    console.log(`Connection to the database with user ${DB_USER} and password ${DB_PASSWORD}`)
    if(!cookies.get('username')) {
        throw redirect(307, `/auth?redirectTo=${url.pathname}`);
    }

    const newsAPIKey='YOUR_NEWS_API_KEY';
    console.log('newsAPIKey', newsAPIKey);
    /**Make API call using API key to fetch new data */

    const news = [
        {id : 1, title: 'News1'},
        {id : 2, title: 'News2'},
        {id : 3, title: 'News3'},
    ];
    return { news };
}