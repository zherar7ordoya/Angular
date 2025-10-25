import { Observable, Subscription, Subject } from 'rxjs';

const subscription = new Subscription();

const observable$ = new Observable(subscriber => {
    const id = setInterval(() => subscriber.next(Date.now()), 1000);
    return () => {
        clearInterval(id);
        console.log('Teardown logic executed');
    };
});

subscription.add(observable$.subscribe(console.log));

const observer = {
    next: value => console.log('Observer received:', value),
    error: err => console.error('Observer error:', err),
    complete: () => console.log('Observer completed')
};

subscription.add(observable$.subscribe(observer));

const subject$ = new Subject();

subscription.add(subject$.subscribe(value => console.log('Subject A:', value)));
subscription.add(subject$.subscribe(value => console.log('Subject B:', value)));
subject$.next('Hello');

subscription.add(observable$.subscribe(subject$));

// ---

setTimeout(() => {
    subscription.unsubscribe();
    console.log('Cleaned up all observables');
}, 5000);
