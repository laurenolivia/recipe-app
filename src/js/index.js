import Search from './models/Search';
//const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);

const search = new Search('pizza');
console.log(search);
search.getResults();



