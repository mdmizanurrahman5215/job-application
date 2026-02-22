## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
### 1.getElementById() 
- select an element using unique id
- return a single element
- it is very fast

### 2.getElementsByClassName
-select elements using  class name.
-select multiple elements using same class Name.
-return a live HTMLCOLLECTION .
 ### 3.querySelector
-select element using css selector
-select first match element of the selector
###querySelectorAll()
-select element using css selector
-return static NodeList.
-select multiple element using the same selector

##2. How do you create and insert a new element into the DOM?
- first we create a element using document.createElement("tagName")
- select parant element .
 - add or insert the created element into the parant using parant.appendChild(tagName)

 ##3. What is Event Bubbling? And how does it work?
-Event bubbling is a default behavior of dom.
-it perform event from child then parant and goes upto document.
    
##3. 4. What is Event Delegation in JavaScript? Why is it useful?
### Event Delegation
- Event delegation is a js technique that useto to bubbling behavior.
-  we add a single event to parant element to handle events trigger by its child element
 ## useFull :
- reduce same event listener to child
- improve performance
- work dynamiccaly
- clean code
- easy to maintain
 ##What is the difference between preventDefault() and stopPropagation() methods?
 ### preventDefault()
-preventDefault is used to prevent or stop browser default behavior. like form submission , link navigation etc
 ### stopPropagation()
-it uset to stop events bubbling or capturing.  




      
