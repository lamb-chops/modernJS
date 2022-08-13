
const arr = [75,76,80,95,100]

function avg (arr) {
    let sum = 0
    let avg = 0.0
    const length = arr.length
    arr.forEach(element => {
        sum+= element
    });
    avg = sum/length
    console.log(avg)
}

avg(arr)