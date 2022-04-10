'use strict';

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    render() {
        return (
            `<div class="goods-item">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
            </div>`
        );
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }

    sumGoods() {
        let x = 0;
        this.goods.map(good => x += good.price, x);
        document.querySelector('.goods-sum').innerHTML = `Сумма всех товаров: ${x}`;
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

class BasketItem {

}

class Basket {

}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.sumGoods();