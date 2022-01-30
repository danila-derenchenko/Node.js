const EventEmitter = require("events");
const emitter = new EventEmitter();

/* const years = process.argv[2];
const months = process.argv[3];
const days = process.argv[4];
const hours = process.argv[5];
const minutes = process.argv[6];
const seconds = process.argv[7]; */

const generateTimer = () => {
    let id = 1;
    setInterval(() => {
        createTimer([12, 0, 0, 0, 0, 0], id);
        id = id + 1;
    }, 10000)
}

const createTimer = (time, id = 1) => {
    for (let i = 0; i <= 5; i++) {
        if (time[i] === undefined) {
            time[i] = 0;
        }
    }
    console.log(`${time[5]}-${time[4]}-${time[3]}-${time[2]}-${time[1]}-${time[0]}. Таймер ${id}`);
    const timer = setInterval(() => {
        for (let i = 0; i <= 5; i++) {
            if (time[i] != 0) {
                time[i] = time[i] - 1;
                break;
            }
            else if (time[i] == 0 && time[i + 1] != 0 && i < 2) {
                time[i] = 59;
                time[i + 1] = time[i + 1] - 1;
                break;
            }
            else if (time[i] == 0 && time[i + 1] != 0 && i == 2) {
                time[2] = 23;
                time[1] = 59;
                time[0] = 59;
                time[i + 1] = time[i + 1] - 1;
                break;
            }
            else if (time[i] == 0 && time[i + 1] != 0 && i == 3) {
                time[3] = 30;
                time[2] = 23;
                time[1] = 59;
                time[0] = 59;
                time[i + 1] = time[i + 1] - 1;
                break;
            }
            else if (time[i] == 0 && time[i + 1] != 0 && i == 4) {
                time[4] = 11;
                time[3] = 30;
                time[2] = 23;
                time[1] = 59;
                time[0] = 59;
                time[i + 1] = time[i + 1] - 1;
                break;
            }
        }
        if (time[0] == 0 && time[1] == 0 && time[2] == 0 && time[3] == 0 && time[4] == 0 && time[5] == 0) {
            emitter.emit("tick", `Время истекло. Таймер ${id}`);
            clearInterval(timer);
        }
        else {
            emitter.emit("tick", `${time[5]}-${time[4]}-${time[3]}-${time[2]}-${time[1]}-${time[0]}. Таймер ${id}`);
        }
    }, 1000)
}

emitter.on("tick", console.log);

generateTimer();

/* createTimer([seconds, minutes, hours, days, months, years]); */