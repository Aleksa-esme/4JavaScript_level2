'use strict';

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks' },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];
    
const renderGoodsItem = (title, price=10) => 
    `<div class="goods-item">
        <h3>${title}</h3>
        <p>${price}</p>
    </div>`;

//нужно добавить join('')-позволяет преобразовать и объединить все элементы массива в одно 
//строковое значение; по умолчанию, элементы массива будут разделены запятой
 const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);
