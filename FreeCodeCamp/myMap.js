/* Maps */

let myMap = function() {
  this.collection = {};
  this.count = 0;
  this.size = () => {
    return this.count;
  };
  this.set = (key, value) => {
    this.collection[key] = value;
    this.count++;
  };
  this.has = key => {
    return (key in this.collection);
  };
  this.get = key => {
    return (key in this.collection) ? this.collection[key] : null;
  };
  this.delete = key => {
    if (key in this.collection) {
      delete this.collection[key];
      this.count--;
    }
  };
  this.values = () => {
    let result = new Array();
    for (let key of Object.keys(this.collection)) {
      result.push(this.collection[key]);
    };
    return (result.length > 0) ? result : null;
  };
  this.clear = () => {
    this.collection = {};
    this.count = 0;
  };
};

let map = new myMap();
map.set('arms', 2);
map.set('fingers', 10);
map.set('eyes', 2);
map.set('belly button', 1);

console.log(map.get('fingers'));
console.log(map.size());
console.log(map.values());

let map2 = new Map();
map2.has('hands');
map2.entries();

let keyObj = {},
    keyFunc = () => {};

map2.set('hello', 'string value');
map2.set(keyObj,  'object value');
map2.set(keyFunc, 'function value');
map2.set(NaN, 'NaN value');

console.log(map2.size);
console.log(map2.get('hello'));
console.log(map2.get(keyObj));
console.log(map2.get(keyFunc));
console.log(map2.get(NaN));
