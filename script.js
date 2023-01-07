/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let arr_new = [
  { id: 5, name: "wick", age: "38", profession: "sofware_engineer" },
  { id: 6, name: "rose", age: "23", profession: "backend_developer" },
  { id: 7, name: "smith", age: "29", profession: "frontend_developer" },
];

const new_person = { id:4, name:"susan", age:"20", profession:"intern" }

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(person => {
    if (person.profession == "developer") {
      console.log(person.name)
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(person => {
    if (person.profession == "developer") {
      console.log(person.name)
    }
  });
}

function addData() {
  //Write your code here
  arr.push(new_person)
  const last_index = arr.length-1
  console.log(arr[last_index])
}

function removeAdmin() {
  //Write your code here
  let index = -1
  arr.map(person => {
    index++
    const profession = person.profession
    if (profession == "admin") {
      arr.splice(index,1)
    }
  })
  console_arr(arr)  
}

function concatenateArray() {
  //Write your code here
  arr = arr.concat(arr_new)
  console_arr(arr)
}

function console_arr(arr) {
  arr.forEach(person => {
    console.log(person.name)
  });
}
