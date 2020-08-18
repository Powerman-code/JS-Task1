// Задача 5-3
// использование методов класса
// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих

class Storage {
    constructor(items) {
      this.items = items;
    // console.log(items);

    }
}

    Storage.prototype.getItems = function () {
        return this.items;
    // console.log(this.items)
    }

    Storage.prototype.addItem = function (item) {
    this.items.push(item);
    }

    Storage.prototype.removeItem = function (item) {
    if (this.items.includes(item)) {
    //   delete this.items(item);
    //   console.log(this.items.indexOf( item ));
        let itemToDeleteValue = this.items.indexOf( item );
        console.log(itemToDeleteValue);
        this.items.splice(itemToDeleteValue, 1);
        console.log(this.items);
    }
}

// console.log(typeof Storage);
// 'function'

const goods = [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор'
  ];

   const storage = new Storage(goods);

    console.log(storage.getItems());
  /* [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор'
  ] */

   storage.addItem('Дроид');
   console.log(storage.getItems());
  /* [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
    'Дроид'
  ] */

   storage.removeItem('Пролонгер');
   console.log(storage.getItems());
  /* [
    'Нанитоиды',
    'Железные жупи',
    'Антигравитатор',
    'Дроид'
  ] */

