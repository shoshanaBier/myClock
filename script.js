const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const seeHour = document.querySelector('.see');


function setDate() {
    
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
    const zeroForHours = hours < 10 ? '0':'';
    const zeroForMins = mins < 10 ? '0':'';
    const zeroForSeconds = seconds < 10 ? '0':'';

    seeHour.textContent = `${zeroForHours + hours}:${zeroForMins + mins}:${zeroForSeconds + seconds}`;
}

setInterval(setDate, 1000);