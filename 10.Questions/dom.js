/*
Question: Is there any difference between window and document?

Answer: window is that global object that holds global variables, global functions, location, history everything is under it.
Document is also under window. document is a property of the window object. 
document represents the DOM and DOM is the object oriented representation of the html markup you have written. 
All the nodes are part of document. 
Hence you can use getElementById or addEventListener on document. These methods are not present in the window object.

==========================================================================
Question: Does document.onload and window.onload fire at the same time?

Answer: window.onload is fired when DOM is ready and all the contents including images, css, scripts, 
sub-frames, etc. finished loaded. This means everything is loaded.

document.onload is fired when DOM is ready which can be prior to images and other external content is loaded.
document.readyState Returns "loading" while the Document is loading, "interactive" once it is finished parsing 
but still loading sub-resources, and "complete" once it has loaded. 
The readystatechange event fires on the Document object when this value changes.
==========================================================================

Question: What are the different ways to get an element from DOM?

Answer: You can use the following methods in document

getElementById to get a element that has the provided Id.
getElementsByClassName to get a nodelist (nodelist is not an array, rather it is array-like object) by providing a class name.
getElementsByTagName to get a nodelist by the provided tag name.
querySelector you will pass css style selector (jquery style) and this will retrurn first matched element in the DOM.
querySelectorAll will return a non-live nodelist by using depth-first pre order traversal of all the matched elements. Non-live means, any changes after selecting the elements will not be reflected.
There are two more options but I dont use them frequently-

getElementsByName returns the list of elements by the provided name of the html tag
getElementsByTagNameNS returns elements with particular tag name within the provided namespace  

==========================================================================

Question: What is the fastest way to select elements by using css selectors?
Answer: 
As we go downwards through the list, it takes more time to select elements.

ID (#myID)
Class (.myClass)
Tag (div, p)
Sibling (div+p, div~p)
child (div>p)
Descendant (div p)
Universal (*)
Attribute (input[type="checkbox"])
Pseudo (p:first-child)

==========================================================================

Question: Why querySelectorAll('.my-class') is slower than getElementsByClassName('my-class')?

Answer: querySlectorAll is a generic purpose method. It is optimized for different kinds of selectors. 
Hence it has to check whether you put a "#" or "." in front of the parameter you are passing. 
If you are just passing a class name with ".", under the hood it uses getElementsByClassName 
(could vary based on browser implements). Whereas if you directly uses getElementsByClassName 
it directly uses this method and doesn't have to go through all the initial processing of querySelectorAll. 
Hence to search elements with a particular class name, getElementsByClassName is faster than querySelectorAll.

==========================================================================





*/