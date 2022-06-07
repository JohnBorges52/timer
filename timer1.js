const input = process.argv.slice(2);

let array = []
for (let item of input) {
  array.push(item)
}
array.sort((a,b) => a-b)
console.log(array)

let delay = 0

for (let item of array) {
  if (item % 1 === 0 && item >= 1 ) {
  delay = (item*1000)

  setTimeout( () => {
    process.stdout.write('\x07');
  }, delay)
  }


}





