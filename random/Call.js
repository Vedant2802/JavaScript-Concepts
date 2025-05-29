function setName(name) {
  this.my_name = name;
}

function person(name, age, city) {
  this.my_age = age;
  this.city = city;
  setName.call(this, name);
}
