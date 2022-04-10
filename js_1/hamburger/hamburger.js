'use strict';

class Hamburger {
    constructor () {
        this.burgers = [
            { size: 'big', price: 100, kcal: 40 },
            { size: 'small', price: 50, kcal: 20 },
        ];
        this.stuffing = [];
        this.toppings = [
            { title: 'cheese', price: 10, kcal: 20 },
            { title: 'salad', price: 20, kcal: 5 },
            { title: 'potato', price: 15, kcal: 10 }, 
            { title: 'seasoning', price: 15, kcal: 0 }, 
            { title: 'mayo', price: 20, kcal: 5 },     
        ];
    }

    addTopping(topping = 'cheese') {
        switch (topping) {
            case 'cheese':
                this.stuffing.push(this.toppings[0]);
                break;
            case 'salad':
                this.stuffing.push(this.toppings[1]);
                break;
            case 'potato':
                this.stuffing.push(this.toppings[2]);
                break;
            case 'seasoning':
                this.stuffing.push(this.toppings[3]);
                break;
            case 'mayo':
                this.stuffing.push(this.toppings[4]);
                break;
            default:
                console.log('Нет такого топпинга');
        }

    }
    
    removeTopping(topping) {
        this.stuffing = this.stuffing.filter(item => {return item.title != topping});
        console.log(`Наполнитель "${topping}" удален из списка`);
    }
    
    getToppings() {
        let toppings = this.toppings.map(topping => topping.title);
        console.log(`Список наполнителей: ${toppings}`);
    }
    
    getSize() {
        console.log('Размеры бургеров:')
        this.burgers.map(burger => console.log(burger.size));
    }
    
    getStuffing() {
        let stuffing = this.stuffing.map(topping => topping.title);
        console.log(`Выбранные наполнители: ${stuffing}`);
    }
    
    calculatePrice(size) {
        let price = 0;
        this.stuffing.map(topping => price += topping.price, price);
        if (size == 'big') {
            let totalPrice = price + this.burgers[0].price;
            console.log(`Стоимость бургера "${size}": ${totalPrice} руб.`);
        } else if (size == 'small') {
            let totalPrice = price + this.burgers[1].price;
            console.log(`Стоимость бургера "${size}": ${totalPrice} руб.`);
        } else {
            console.log('Нет такого размера');
        }
    }
    
    calculateCalories(size) {
        let totalKcal;
        let kcal = 0;
        this.stuffing.map(topping => kcal += topping.kcal, kcal);
        if (size == 'big') {
            totalKcal = kcal + this.burgers[0].kcal;
            console.log(`Каллорийность бургера "${size}": ${totalKcal} ккал`);
        } else if (size == 'small') {
            totalKcal = kcal + this.burgers[1].kcal;
            console.log(`Каллорийность бургера "${size}": ${totalKcal} ккал`);
        } else {
            console.log('Нет такого размера');
        }
    }
}

let burger = new Hamburger();
burger.getSize();
burger.getToppings();
burger.addTopping();
burger.addTopping('salad');
burger.getStuffing();
burger.calculateCalories('small');
burger.calculatePrice('small');
burger.calculateCalories('big');
burger.calculatePrice('big');
burger.removeTopping('cheese');
burger.getStuffing();
burger.calculatePrice('small');
burger.calculatePrice('big');
