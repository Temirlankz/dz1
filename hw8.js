let m = prompt()
let p = prompt()

let r = Math.floor(( +m / +p ))
let c = ((+m / +p) - +r) * 500; 
alert (r)  
alert(c.toFixed(2))