//lista di users
const users = [
  { name: "Mario", lastName: "Rossi", age: 25, city: "Milano" },
  { name: "Laura", lastName: "Bianchi", age: 30, city: "Roma" },
  { name: "Luigi", lastName: "Verdi", age: 22, city: "Venezia" },
  { name: "Giovanna", lastName: "Neri", age: 28, city: "Roma" },
  { name: "Alessio", lastName: "Marrone", age: 35, city: "Palermo" },
  { name: "Francesca", lastName: "Giallo", age: 27, city: "Milano" },
  { name: "Paolo", lastName: "Viola", age: 32, city: "Genova" },
  { name: "Anna", lastName: "Arancio", age: 29, city: "Venezia" },
  { name: "Marco", lastName: "Celeste", age: 31, city: "Roma" },
  { name: "Sara", lastName: "Rosa", age: 26, city: "Palermo" }
];

// ritorna un user random (non penso necessiti di troppe spiegazioni sul funzionamento)
const randomUser = function () {
  const randomUserIndex = Math.floor(Math.random() * users.length);
  return users[randomUserIndex];
};

// classe che definisce un user
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
    }
  }
}

const execute = function () {
  const user1Data = randomUser();
  const user2Data = randomUser();
  const user1 = new User(
    user1Data.name,
    user1Data.lastName,
    user1Data.age,
    user1Data.city
  );
  const user2 = new User(
    user2Data.name,
    user2Data.lastName,
    user2Data.age,
    user2Data.city
  );

  const comparisonResult = user1.compareAge(user2);
  console.log(comparisonResult);
};
