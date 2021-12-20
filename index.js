let count = 0;
const countUp = () => {
    console.log(count++);
}
setInterval(countUp, 10);