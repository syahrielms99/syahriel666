export function sayHello({ firstName, lastName, age }: {
   firstName: String;
   lastName?: String;
   age?: Number;
}) {
    console.log('Kionnichiwa');
    console.log(`your first name is ${firstName}`);
   
    if (lastName) {
        console.log(`Your last name is ${lastName}`);
    }
    if (age) {
        console.log(`Your age is ${age}`);
    }
}