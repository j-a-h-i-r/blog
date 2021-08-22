---
slug: "chrome-extension-external-iframe"
date: "2021-06-11"
title: "Running scripts inside externally loaded iframe from Chrome Extension"
tags: ["extension", "javascript"]
---

Recently I worked on developing a Chrome Extension. The extension is quite simple. It presents some fields in the popup. Some pre-configured inputs in the current tab can be autofilled by clicking on a button.

#### Problem 1
The page is rendered using React. So doing the following does not work

```
const inputSelector = 'input#id';
const inputElement = document.querySelector(inputSelector);
inputElement.value = 'some-value';
```

Luckily the solution to this problem is simple,

```
const inputSelector = 'input#id';
const inputElement = document.querySelector(inputSelector);
inputElement.select();
inputElement.execCommand('insertText', false, 'some-value');
```

#### Problem 2
Now comes the biggest problem. The input elements are loaded via `iframe`. So trying to select an element using `querySelector` from the root of the page will result in the following error

> Uncaught DOMException: Blocked a frame with origin "https://orgigin.of.the.active.tab" from accessing a cross-origin frame.

This error occurs beacuse browsers prevent JavaScript from accessing elements that do not belong to the origin. This is an important security feature.

So how to overcome this restriction? The solution is to instruct Chrome to run our script directly inside the `iframe`. Chrome scripts are usually run the following way,

```
chrome.scripting.executeScript({
  target: {tabId: tabId},
  function: functionToInject,
},
  () => { ... });
```

Here `tabId` is the tab where the script will be inserted, which is usually the active tab. The code above will inject the `functionToInject` function inside the root frame. Chrome supports passing a `frameIds` property in `target` to target specific frame on the page. 

So, how to find the ID of the frames? Well Chrome provides an API for that. The `webNavigation` API. The following code will fetch all the frames of the current page,

```
chrome.webNavigation.getAllFrames({
  tabId: tabId
}, (frames) => {
  // frames contains an array of frames in the current page.
  // frameId contains the id of the frame
})
```

So, if we combine these two APIs, we can inject a script directly into an external frame and fill an input without violating the cross-origin frame restriction.

```
chrome.webNavigation.getAllFrames({tabId: tabId}, (frames) => {
  const frameIds = frames
  .map((f) => f.frameId);
  
  chrome.scripting.executeScript({
    target: { tabId: tabId, frameIds: frameIds },
    function: functionToInject,
  });
});
```

This will inject the function in all frames found in the page. Ofcourse further filters can be applied to the frames to target more specific frames.
