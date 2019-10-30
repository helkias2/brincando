const ds = function(el) {
    return document.querySelector(el)
}
const dsall = function(el) {
    return document.querySelectorAll(el);
};
// lista todos os itens
pizzaJson.map(function(item, index) { // lista as minha pizza 
    //lista dados a serem preenchidos
    // pizzaItem dados do html 
    let pizzaItem = ds('.models .pizza-item').cloneNode(true);

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('a').addEventListener('click', function(e) {
        e.preventDefault();

        console.log("Clicou na pizza!")
    })

    //Preenche imagens e dados no html 
    ds('.pizza-area').append(pizzaItem);
    console.log(pizzaItem);
});