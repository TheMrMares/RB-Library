# RB Library

## RB.image()
**Function:**
```js
RB.image({options})
```
**Options:**
- ```path:``` = URL of image you want create
**Return:** Returns *Image()* object.
**Example:**
```js
let imageURL = './images/kitty.png'; //Set picture URL

let ourImage = RB.image({path: imageURL}); //Use RB.image() to get Image object

document.body.appendChild(ourImage); //Append image in body
```

## RB.viewport()
**Function:**
```js
RB.viewport({element: element})
```
**Options:**
- ```element:``` = HTML element you want to check is it in viewport or not.
- ```top:``` = value of px that shrinks detection field (viewport) from top.
- ```bottom:``` = value of px that shrinks detection field (viewport) from bottom.
**Return:** Returns *true* if element is in viewport or *false* if it isn't.
**Example:**
```js
let ourElement = document.querySelector('#someelement'); //Get our element

document.addEventListener('scroll', () => { //Add scroll event to our document
        //Use RB.viewport() to check is element in viewport
        if(RB.viewport({element: ourElement, top: 0, bottom: 0})){ 
            //If it is set his "color" property blue
            ourElement.style.color = 'blue';
        } else {
            //If it isn't set his "color" property red
            ourElement.style.color = 'red';
        }
})
```

## RB.append()
**Function:**
```js
RB.append({element: element, parent: parent, content: content, properties: {properties}, show: show})
```
**Options:**
- ```element:``` = element you want to create, for example 'div'.
- ```parent:``` = element in which new element will be created.
- ```content:``` = text content you want put inside your elemet.
- ```propertis:``` = object holds properties you want to set to your object.
- ```show:``` = state which will manage rendering. If *false* element you are creating will not be really render on website, if *true* it iwll be rendered. As default "show = true".
**Return:** Returns *created element object*, doesn't matter is "show" property *true* or *false*
**Example:**
```js
let myNewObj = RB.append({ //Assign object that will be returned to variable "myNewObj"
    element: 'div', 
    parent: document.body, 
    content: 'Hello world',
    properties: {id: 'someId', class: 'someClass'},
    show: true
});
//After that code run our <div id="someId" class="someClass"> HelloWorld </div> is rendered in our document.body and assigned to our myNewObj
```