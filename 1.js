let user = {
  name: 'Mike',
  friend: ["John", "Paul", "Jimmy"],
  families:[{name:"David", age:20} , {name:"Ava", age:25}],
  location: {
  region:"England",
  country:"United Kingdom"
  },
  aboutMe: {
      status: "Single",
      pet: "Dog",
  }
}


const {location : {region : region2}} = user
console.log(region2);


const {friend: [first]}= user;
console.log(first);


const {families: [{name, age}, {name: name2, age: age2}]} = user
console.log(name, age);
console.log(name2, age2);



