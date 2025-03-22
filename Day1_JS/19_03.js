//Window object -> Document -> HTML -> Head and Body
//console.log(document.links)->it return html collection of all the links present on website

document.getElementById('idname');//access element by id
document.getElementById('idname').innerHTML="<h2/>Raghav";//access element by id and change its value
document.getElementsByClassName('idname');//return html collection


//setAttribute can override our attributes by giving value to its attribute ans return undefined in console but change
//To change style  attribute.style.change
// document.getElementByClassName('bg').getAttribute()->to get attribute and set attribute value
//Differnece between textContent and innerText is textContent has ability to show hidden or non visible text in part hide by style while innerHtml show whole html part inside that id

document.querySelector('h1')
document.querySelector('#h1')//id selection
document.querySelector('.h1')//classs selection
document.querySelector('input[type="password"]')//it will retunr input type of password
document.querySelector('p:first-child');
const p=document.querySelectorAll('h1');//here it return nodelist on which we can apply ofr loop and access element by p[0];  

//Conevrt html collection to array using Array.from(HTML collections);  