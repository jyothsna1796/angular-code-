import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: import-blacklist
import * as Rx from 'rxjs/Rx';
import { NgModule } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable, asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {


    console.log('script start');

    setTimeout(function () {
      console.log('setTimeout');
    }, 0);

    Promise.resolve().then(function () {
      console.log('promise1');
    }).then(function () {
      console.log('promise2');
    });

    console.log('script end');



    // const asyncScheduler = Rx.Observable.of('')
    //   .startWith('async', Rx.Scheduler.async);

    // const asapScheduler = Rx.Observable.of('')
    //   .startWith('asap', Rx.Scheduler.asap);

    // const queueScheduler = Rx.Observable.of('')
    //   .startWith('queue', Rx.Scheduler.queue);

    // Rx.Observable.merge(
    //   asyncScheduler,
    //   asapScheduler,
    //   queueScheduler)
    //   .filter(x => !!x)
    //   .subscribe(console.log);

    // console.log('after subscription');





    // const observable = new Observable(subscriber => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });
    //   console.log('----------------just before subscribe-----------------');
    //   observable.subscribe({
    //     next(x) { console.log('got value ' + x); },
    //     error(err) { console.error('something wrong occurred: ' + err); },
    //     complete() { console.log('done'); }
    //   });
    //   console.log('--------------just after subscribe--------------------');


    // }
    // rout() {
    //   this.route.navigate(['Ope']);
    // }
  }
// -----------------------SCHEDULERS
}
