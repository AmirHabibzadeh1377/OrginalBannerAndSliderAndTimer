const endTime = new Date();
endTime.setHours(endTime.getHours() + 5)
const timerDiv = document.querySelector('.timer');

function updateTimer() {
    const now = new Date();
    const timeDiff = endTime - now;

    if (timeDiff <= 0) {
        timerDiv.textContent = "پایان پیشنهاد!";
        clearInterval(timerInterval);
        return;
    }

    // const days = Math.floor(timeDiff / (1000 * 60 * 60));
    // const hours = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    // const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);


    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    // timerDiv.textContent = `${days} روز ${hours} ساعت ${minutes} دقیقه ${seconds} ثانیه`;
    if(hours){
        timerDiv.textContent = `${hours} ساعت ${minutes} دقیقه ${seconds} ثانیه`;
    }
    if(!hours){
        timerDiv.textContent = `${minutes} دقیقه ${seconds} ثانیه`;
    }
    if(!minutes){
        timerDiv.textContent = `${seconds} ثانیه`;
    }
}

const timerInterval = setInterval(updateTimer, 1000);

updateTimer();