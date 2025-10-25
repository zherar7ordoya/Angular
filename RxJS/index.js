import { Observable, Subscription } from "rxjs";
import { map, filter } from "rxjs/operators";

const users = {
    data: [
        {
            id: 1,
            status: "active",
            age: 14,
        },
        {
            id: 2,
            status: "inactive",
            age: 12,
        },
        {
            id: 3,
            status: "active",
            age: 12,
        },
        {
            id: 4,
            status: "inactive",
            age: 12,
        },
        {
            id: 5,
            status: "active",
            age: 13,
        },
        {
            id: 6,
            status: "inactive",
            age: 15,
        },
        {
            id: 7,
            status: "inactive",
            age: 13,
        },
        {
            id: 8,
            status: "inactive",
            age: 14,
        },
        {
            id: 9,
            status: "active",
            age: 7,
        },
        {
            id: 10,
            status: "active",
            age: 17,
        },
    ],
};

const observable$ = new Observable(subscriber => subscriber.next(users))
.pipe(
    map(value => value.data),
    filter(data => data.length >= 10),
    map(data =>  data.filter(x => x.status === "active")),
    map(actives => actives.reduce((sum, user) => sum + user.age, 0) / actives.length),
    map(average => {
        if (average < 18) throw new Error(`Average age is too small (${average})`);
        else return average;
    }),
    map(average => `The average age is ${average}`)
);

const observer1 = {
    next: x => console.log("Observer 1 got a next value: " + x),
    error: err => console.error("Observer 1 got an error: " + err),
    complete: () => console.log("Observer 1 got a complete notification"),
};

const observer2 = {
    next: x => console.log("Observer 2 got a next value: " + x),
    error: err => console.error("Observer 2 got an error: " + err),
    complete: () => console.log("Observer 2 got a complete notification"),
};

const subscription = new Subscription();

subscription.add(observable$.subscribe(observer1));
subscription.add(observable$.subscribe(observer2));

subscription.unsubscribe();