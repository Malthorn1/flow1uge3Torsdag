
    var names = ["Jens", "Erik", "Palle", "Rasmus"]; 
    var list = ("<ul><li>" + names.join("</li><li>") + "</li></ul>" );   
    namelist()
    var button1 = document.getElementById("submitform1").onsubmit=addName;
    var button2 = document.getElementById("submitform2").onsubmit=removeFirst;
    var button3 = document.getElementById("submitform3").onsubmit=removeLast;
    
    function clickMe(id) {
        console.log("Hi from " + id)
    }
    
    function updateNameList () {
    var list = ("<ul><li>" + names.join("</li><li>") + "</li></ul>" ); 
    document.getElementById("NameList").innerHTML = list;
    }
    
    function namelist() {
        document.getElementById("NameList").innerHTML = list;
    }
    

    function addName(e) {
    e.preventDefault(); 
    names.push(document.getElementById("name").value); 
    console.log(names);
    updateNameList(); 
    }
    
    function removeFirst(e) {
        e.preventDefault(); 
        names.pop(document.getElementById("name").value); 
        console.log(names);
        updateNameList(); 
    }
    
    function removeLast(e) {
        e.preventDefault(); 
        names.shift(document.getElementById("name").value); 
        updateNameList(); 
    }
    
    
    var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

table1(cars); 

function table1 (list) {
    var headers = (Object.getOwnPropertyNames(list[0]));
    var headerString = "<tr>" +
            headers.map(function (a) {
                return "<th>" + a + "</th>"
            }).join("") +
            "</tr>";
    console.log(headerString);
    var htmlRows = "<tr>"
    list.forEach(e => {
        var temp = Object.values(e).map(function (a) {
            return "<td>" + a + "</td>";
        }).join("") + "</tr>";
        htmlRows += temp;
    })
    console.log(htmlRows);
    document.getElementById("CarList").innerHTML = "<table border='1'>" + headerString + htmlRows; 
}
function filter(evt) {
    evt.preventDefault();
    let filtedcars = cars.filter(function (a) {
        return a.price < document.getElementById("lablePrice").value;

    })
    table1(filtedcars);
}
   var button = document.getElementById("price").onsubmit = filter;
;









