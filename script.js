//your JS code here. If required.
let url = location.href
// console.log(url)
let count = 0;
for(let i=0; i<=url.length-1; i++){
	count++
}
alert(`The length of the URL is: ${count}`)