const myApp = {
  arr : [
    "String", 
    234, 
    "Str", 
    "399", 
    455, 
    obj = {
      name : "Vitaliy",
      surname : "Kramar"
    }],
  filterBy : function (array , type) {
    const result = array.filter(elem => typeof elem == type);
    console.log(result);
  }
};

myApp.filterBy(myApp.arr, "object");