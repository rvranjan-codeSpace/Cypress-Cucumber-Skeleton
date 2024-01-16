const Student = {
    "name": "rajan",
    "age": 23,
    "discipline": "computers"
}

console.log("This command will run when we execute require from some other file")
module.exports = Student

// spread

let num = [2, 3, 4]
let num_obj = { ...num }
console.log(num_obj)