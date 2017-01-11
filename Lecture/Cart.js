var cart = {
  items: [
    //  id,
    //  price
  ];
  addItem: function(newItem) {
    this.items.push(newItem);
  }
  removeItem: function(itemIndex) {
    this.items.splice(itemIndex, 1);
  }
  calculateTotal: function(x) {
    var total = 0;
    for (var i = 0; i < this.items.length; i++) {
      total += this.items[i].price;
    }
    return total;
  }
}