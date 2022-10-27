//Write your Javascript code here
console.log("Shoppinglist")

let myElement = document.getElementById("2")
console.log(myElement)

let myList = document.getElementsByTagName("li")
console.log(myList)

myElement.setAttribute("class", "healthy")

//Attribute hidden
//myElement.setAttribute("hidden", "true")

//All with class healthy
let myHealthy = document.getElementsByClassName("healthy")
console.log(myHealthy)

//Parent
let p = document.getElementById("0").parentNode
console.log(p)

//Add new li element to list
let newElement = document.createElement("li")
let newtextelement = document.createTextNode("Cake")
newElement.setAttribute("class", "unhealthy")
newElement.setAttribute("id", "7")
newElement.append(newtextelement)
document.getElementById("list").append(newElement)

let newList = document.createElement("li")
let newtext = document.createTextNode

//Function tilføjer element til listen unhealty
function addgoods(e)
{
    console.log("In the add goods function");
    let inputText = (elementInput).value;
    console.log("The input text is: " + inputText);

    let listUnhealthy = document.getElementById("listUnhealthy")
    let newli = document.createElement("li");
    let newtext = document.createTextNode(inputText)
    newli.appendChild(newtext)
    newli.setAttribute("class", "unhealthy")

    listUnhealthy.appendChild(newli);
}

//Find Input
let elementInput = document.getElementById("newgoods")

//Add event
document.getElementById("addbutton").addEventListener("click",  addgoods)

//Const List
const GetList = document.getElementById("list")

//Function to hide element
GetList.addEventListener("click", ClickHidden)

function ClickHidden(e)
{
    let clickElement = (e.target)

    if (e.target && (clickElement).nodeName == "LI")
    {
        console.log(clickElement.id + " was clicked")
        clickElement.setAttribute("hidden", "true")
    }
}
