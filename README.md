# RB Library

## RB.image()
**RB.image({path: ```url```})**
- ```url``` = URL of image that you want create

**Return:** Returns *Image()* object.

## RB.viewport()
**RB.viewport({element: ```element```})**
- ```element``` = HTML element that you wanted to check is it in viewport or not.

**Return:** Returns *true* if element is in viewport or *false* if it isn't.

## RB.append()
**RB.append({element: ```element```,parent: ```parent```, content: ```content```, properties: ```{properties}```, show: ```show```})**
- ```element``` = element that you want to create, for example 'div'.
- ```parent``` = element in which new element will be created.
- ```content``` = text content that you want put inside your elemet.
- ```{properties}``` = object that holds properties you want to set to your object.
- ```show``` = *true* if you want really render element inside parent or *false* if you don't want render element

**Return:** Returns *created element object*, doesn't matter is "show" argue *true* or *false*