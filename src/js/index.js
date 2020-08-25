import axios from 'axios';

//const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);

async function getResults (query){
    try {
        const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
        console.log(res);
    } catch(error) {
        console.log('ERROR READS: ',error);
    }
} getResults('pizza');

