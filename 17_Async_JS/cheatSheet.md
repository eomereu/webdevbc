## Asynchronous JavaScript
### Call Stack
Call stack is the mechanism that JS uses to keep track of where it is in a bunch of function calls.
> [**Loupe**](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D) is a useful webtool in terms of visualising the *Call Stack*, *Callback Queue* *(and Web Apis)* sides and status during the execution of a given JS code.

> Besides the Loupe tool, we can simply use the Chrome built-in debugger under the *Sources* tab within the *Inspect Element* window!

### Single Threaded & Web APIs
JavaScript is a single threaded language which basically means it only performs one task at a time. In other words, at any given point in time, that single JS thread is running at most one line of JS code.

We solve this issue by using Web APIs (like setTimeout):
```javascript
console.log("Hello!")
setTimeout(function() {
  console.log("Processing...")
}, 3000)
console.log("Done!")
```
The output for the code above is:
>Hello!  
Done!  
Processing...

So here actually this parallell working task is not handled by JavaScript. Instead it is done by the browser which is naturally written in another language.

### Behind the Scenes
Browsers come with Web APIs that are able to handle certain tasks in the background (like naking requests or setTimeout)

The JS call stack recognizes these Web API functions and passes them off to the browser to take care of

Once the browser finishes those tasks, they return and are pushed onto the stack as a callback.