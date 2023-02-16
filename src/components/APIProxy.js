export default class FetchData{
    constructor(url){
        this.url = url;
    }

    async getData(){
        try {
            const response = await fetch(this.url);
            const data = await response.json();
            return data;
        } catch(error){
            console.error(error)
        }
    }
}


// https://marcrodrigfelix.github.io/fetch_request_with_a_js_class

// https://getbootstrap.com/docs/5.2/getting-started/introduction/

// https://react-bootstrap.netlify.app/layout/breakpoints/