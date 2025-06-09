const user = {
  name: "Akshat Vedant",
  age: 24,
  subjects: ["maths", "science", "english"],
  contact: {
    email: "akshat@example.com",
    phone: "123-456-7890",
  },
  address: {
    street: "123 Main St",
    city: "Bengaluru",
    location: {
      lat: {
        lat: 1234,
      },
      lng: 77.5946,
    },
  },
};

const { subjects, subjectLength = subjects.length } = user;

// console.log(subjects, subjectLength);

// Creating Aliases during destructuring

// Example

const { age: myAge } = user;

// Here myAge is an alias for the age , now you can not access the "age" once you assign an alias to it
// console.log(myAge);

// Extracting values from nested objects

const {
  address: {
    location: {
      lat: { lat },
    },
  },
} = user;

// console.log(lat);

// Destructuring to the Functional Parameters

function sendEmail({ contact: { email } }) {
  console.log(`The student email is ${email}`);
}

// sendEmail(user);

// destructuring inside an iteration using the for of loop

const newObj = [
  {
    name: "Abc",
    age: 24,
  },
  {
    name: "Abc",
    age: 24,
  },
  {
    name: "Abc",
    age: 24,
  },
  {
    name: "Abc",
    age: 24,
  },
  {
    name: "Abc",
    age: 24,
  },
];

// const iterableObject = Object.entries(newObj);
for (let { name, age } of newObj) {
  console.log(name, age);
}

for (const key in newObj) {
  //   if (Object.prototype.hasOwnProperty.call(object, key)) {
  //     const element = object[key];
  //   }
  //   console.log(newObj[key].name);
}
