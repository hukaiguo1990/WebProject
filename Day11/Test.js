class EventEmitter {
    this.events = {
        // "eventName": []
    };

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    emit(eventName, args) {
        if (!this.events[eventName]) {
            return;
        }
        this.events[eventName].forEach((callback)=>{
            callback(args);
        });
    }
}


event.on("eventName", () => {
    console.log('1');
});

event.emit('eventName', '1');


let task1 = new Promise(() =>{ return 1});
let task2 = new Promise(() =>{ return 2});
let task3 = new Promise(() =>{ return 3});

// task1,task2 先执行，再执行task3,最后把他仨结果通过数组返回

Promise.all([task1, task2]).then((values) => {
    return task3.then((value3)=>{
            return values.concat(value3);
        });
    }).then((result)=>{
      console.log(result);
  });