# Pjax

[![Build Status](https://img.shields.io/travis/MoOx/pjax.svg)](https://travis-ci.org/MoOx/pjax).

> Easily enable fast AJAX navigation on any website (using pushState() + XHR)

Pjax is **a standalone JavaScript module** that uses [AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX) (XmlHttpRequest) and [pushState()](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history) to deliver a fast browsing experience.

_It allows you to completely transform the user experience of standard websites (server-side generated or static ones) to make users feel like they are browsing an app, especially for those with low bandwidth connections._

**No more full page reloads. No more multiple HTTP requests.**

_Pjax does not rely on other libraries, like jQuery or similar. It is written entirely in vanilla JS._

## Installation

- You can link directly to the [bundle](https://cdn.jsdelivr.net/npm/pjax/pjax.js):
  ```html
  <script src="https://cdn.jsdelivr.net/npm/pjax@VERSION/pjax.js"></script>
  ```

- Or the [minified bundle](https://cdn.jsdelivr.net/npm/pjax/pjax.min.js):
  ```html
  <script src="https://cdn.jsdelivr.net/npm/pjax@VERSION/pjax.min.js"></script>
  ```

- You can also install Pjax from **npm**:
  ```shell
  npm install pjax
  ```
  **Note**: If you use this option, you will need to do one of the following:
    - Link a script tag to either `pjax.js` or `pjax.min.js`. E.g.:
    ```html
    <script src="./node_modules/pjax/pjax.js"></script>
    ```
    - Use a bundler like Webpack. (`index.js` cannot be used in the browser without a bundler).

- Or you can clone the repo and build the bundle from the source using npm:
  ```shell
  git clone https://github.com/MoOx/pjax.git
  cd pjax
  npm install
  npm run build
  ```
  and then link a script tag to either `pjax.js` or `pjax.min.js`. E.g.:
  ```html
  <script src="./pjax.min.js"></script>
  ```

---

## What Pjax Does

_Under the hood, it's just ONE HTTP request with a `pushState()` call._

Pjax loads pages using AJAX and updates the browser's current URL using `pushState()` _without_ reloading your page's layout or any resources (JS, CSS), giving a fast page load.

It works with all permalinks and can update all the parts of the page you want (including HTML metas, title, and navigation state).

In the case of [browsers that don't support `history.pushState()`](http://caniuse.com/#search=pushstate), Pjax gracefully degrades and does not do anything at all.

Additionally, Pjax:

- Is not limited to one container, like jQuery-Pjax is.
- Fully supports browser history (back and forward buttons).
- Supports keyboard browsing.
- Automatically falls back to standard navigation for external pages (thanks to Captain Obvious's help).
- Automatically falls back to standard navigation for internal pages that do not have an appropriate DOM tree.
- Allows for CSS transitions (animations) very easily.
- Is only around 6kb (minified and gzipped).

## How Pjax Works

- It listens to every click on links _you want_ (by default all of them).
- When an internal link is clicked, Pjax fetches the page's HTML via AJAX.
- Pjax renders the page's DOM tree (without loading any resources - images, CSS, JS, etc).
- It checks that all defined parts can be replaced:
    - If the page doesn't meet the requirements, standard navigation is used.
    - If the page meets the requirements, Pjax does all defined DOM replacements.
- Then it updates the browser's current URL using `pushState()`.

## Overview

_Pjax is fully automatic_. You don't need to change anything about your existing HTML,
you just need to designate which elements on your page that you want to be replaced when your site is navigated.

Consider the following page.

```html
<!DOCTYPE html>
<html>
<head>
  <!-- metas, title, styles, etc -->
  <title>My Cool Blog</title>
  <meta name="description" content="Welcome to My Cool Blog">
  <link href="/styles.css" rel="stylesheet">
</head>

<body>
  <header class="the-header">
    <nav>
      <a href="/" class="is-active">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>

  <section class="the-content">
    <h1>My Cool Blog</h1>
    <p>
      Thanks for stopping by!

      <a href="/about">Click Here to find out more about me.</a>
    </p>
  </section>

  <aside class="the-sidebar">
    <h3>Recent Posts</h3>
    <!-- sidebar content -->
  </aside>

  <footer class="the-footer">
    &copy; My Cool Blog
  </footer>

  <script src="onDomReadystuff.js"></script>
  <script>
    // analytics
  </script>
</body>
</html>
```

We want Pjax to intercept the URL `/about`, and replace `.the-content` with the resulting content of the request.

It would also be nice if we could replace the `<nav>` to show that the `/about` link is active, as well as update our page meta and the `<aside>` sidebar.

So all in all we want to update the page title and meta, header, content area, and sidebar, **without reloading styles or scripts**.

We can easily do this by telling Pjax to listen on all `a` tags (which is the default) and use CSS selectors defined above (without forgetting minimal meta):

``` javascript
var pjax = new Pjax({
  selectors: [
    "title",
    "meta[name=description]",
    ".the-header",
    ".the-content",
    ".the-sidebar",
  ]
})
```

Now, when someone in a Pjax-compatible browser clicks an internal link on the page, the content of each of the selectors will be replaced with the specific content pieces found in the next page's content.

_Magic! For real!_ **There is no need to do anything server-side!**

## Differences with [jQuery-pjax](https://github.com/defunkt/jquery-pjax)

- No jQuery dependency.
- Not limited to a container.
- No server-side requirements.
- Works for CommonJS environment (Webpack/Browserify), AMD (RequireJS) or even globally.
- Allows page transitions with CSS animations.
- Can be easily tweaked, since every method is public (and as a result, overridable).

## Compatibility

Pjax only works with [browsers that support the `history.pushState()` API](http://caniuse.com/#search=pushstate). When the API isn't supported, Pjax goes into fallback mode (and it just does nothing).

To see if Pjax is actually supported by your browser, use `Pjax.isSupported()`.

## Usage

### `new Pjax()`

Let's talk more about the most basic way to get started.

When instantiating `Pjax`, you can pass options into the constructor as an object:

```js
var pjax = new Pjax({
  elements: "a", // default is "a[href], form[action]"
  selectors: ["title", ".the-header", ".the-content", ".the-sidebar"]
})
```

This will enable Pjax on all links, and designate the part to replace using CSS selectors `"title", ".the-header", ".the-content", ".the-sidebar"`.

In some cases, you might want to only target some specific elements to apply Pjax behavior. In that case, you can do two different things:

1. Use a custom CSS selector( such as `"a.js-Pjax"` or `".js-Pjax a"`, etc).
2. Override `Pjax.prototype.getElements`.
    - **Note**: If doing this, make sure to return a `NodeList`.

```js
// use case 1
var pjax = new Pjax({ elements: "a.js-Pjax" })
```

```js
// use case 2
Pjax.prototype.getElements = function() {
  return document.getElementsByClassName(".js-Pjax")
}

var pjax = new Pjax()
```

### `loadUrl(href, [options])`

With this method, you can manually trigger the loading of a URL:

```js
var pjax = new Pjax()

// use case 1
pjax.loadUrl("/your-url")

// use case 2 (with options override)
pjax.loadUrl("/your-other-url", { timeout: 10 })
```

### `handleResponse(responseText, request, href, options)`

This method takes the raw response, processes the URL, then calls `pjax.loadContent()` to actually load it into the DOM.

It is passed the following arguments:

* **responseText** (string): This is the raw response text. This is equivalent to `request.responseText`.
* **request** (XMLHttpRequest): This is the XHR object.
* **href** (string): This is the URL that was passed to `loadUrl()`.
* **options** (object): This is an object with the options for this request. The structure basically matches the regular options object, with a few extra internal properties.

You can override this if you want to process the data before, or instead of, it being loaded into the DOM.

For example, if you want to check for a non-HTML response, you could do the following:

```js
var pjax = new Pjax();

pjax._handleResponse = pjax.handleResponse;

pjax.handleResponse = function(responseText, request, href, options) {
  if (request.responseText.match("<html")) {
    pjax._handleResponse(responseText, request, href, options);
  } else {
    // handle non-HTML response here
  }
}
```

### `refresh([el])`

Use this method to bind Pjax to children of a DOM element that didn't exist when Pjax was initialised e.g. content inserted dynamically by another library or script. If called with no arguments, Pjax will parse the entire document again to look for newly-inserted elements.

```js
// Inside a callback or Promise that runs after new DOM content has been inserted
var newContent = document.querySelector(".new-content");

pjax.refresh(newContent);
```


### `reload()`

A helper shortcut for `window.location.reload()`. Used to force a page reload.

```js
pjax.reload()
```

## Options

### `elements` (String, default: `"a[href], form[action]"`)

CSS selector(s) used to find links to apply Pjax to. If needing multiple specific selectors, separate them by a comma.

```js
// Single element
var pjax = new Pjax({
  elements: ".ajax"
})
```

```js
// Multiple elements
var pjax = new Pjax({
  elements: ".pjax, .ajax",
})
```

### `selectors` (Array, default: `["title", ".js-Pjax"]`)

CSS selectors used to find which content to replace.

```js
var pjax = new Pjax({
  selectors: [
    "title",
    "the-content",
  ]
})
```

If a query returns multiples items, it will just keep the index.

Example of what you can do:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Page title</title>
</head>
<body>
  <header class="js-Pjax">...</header>
  <section class="js-Pjax">...</section>
  <footer class="the-footer">...</footer>
  <script>...</script>
</body>
</html>
```

This example is correct and should work "as expected".

**NOTE:** _If the current page and new page do not have the same amount of DOM elements, Pjax will fall back to normal page load._

### `switches` (Object, default: `{}`)

This is an object containing callbacks that can be used to switch old elements with new elements.

The object keys should be one of the defined selectors (from the `selectors` option).

Examples:

```js
var pjax = new Pjax({
  selectors: ["title", ".Navbar", ".js-Pjax"],
  switches: {
    "title": Pjax.switches.outerHTML, // default behavior
    ".the-content": function(oldEl, newEl, options) {
      // this is identical to the default behavior
      oldEl.outerHTML = newEl.outerHTML
      this.onSwitch()
    },
    ".js-Pjax": Pjax.switches.sideBySide
  }
})
```

Callbacks are bound to the Pjax instance itself to allow you to reuse it (ex: `this.onSwitch()`)

### Existing Switch Callbacks

- `Pjax.switches.outerHTML`:
  The default behavior, replaces elements using `outerHTML`.
- `Pjax.switches.innerHTML`:
  Replaces elements using `innerHTML` and copies `className`.
- `Pjax.switches.replaceNode`:
  Replaces elements using `replaceChild`
- `Pjax.switches.sideBySide`:
  Smart replacing that allows you to have both elements in the same parent when you want to use CSS animations. Old elements are removed when all children have been fully animated (an [animationEnd](http://www.w3.org/TR/css3-animations/#animationend) event is triggered).

### Creating a Switch Callback

Your callback function can do whatever you want, but you need to:

1. Replace the `oldEl`'s content with the `newEl`'s content in some fashion.
2. Call `this.onSwitch()` to trigger the attached callback.

Here is the default behavior as an example:

```js
function(oldEl, newEl, pjaxOptions) {
  oldEl.outerHTML = newEl.outerHTML
  this.onSwitch()
}
```

### `switchesOptions` (Object, default: `{}`)

These are options that can be used during content replacement by switches. For now, only `Pjax.switches.sideBySide` uses it. This is very convenient when you use something like [Animate.css](https://github.com/daneden/animate.css) with or without [WOW.js](https://github.com/matthieua/WOW).

```js
var pjax = new Pjax({
  selectors: ["title", ".js-Pjax"],
  switches: {
    ".js-Pjax": Pjax.switches.sideBySide
  },
  switchesOptions: {
    ".js-Pjax": {
      classNames: {
        // class added to the old element being replaced, e.g. a fade out
        remove: "Animated Animated--reverse Animate--fast Animate--noDelay",
        // class added to the new element that is replacing the old one, e.g. a fade in
        add: "Animated",
        // class added on the element when navigating back
        backward: "Animate--slideInRight",
        // class added on the element when navigating forward (used for new page too)
        forward: "Animate--slideInLeft"
      },
      callbacks: {
        // to make a nice transition with 2 pages at the same time
        // we are playing with absolute positioning for the element we are removing
        // & we need live metrics to have something great
        // see associated CSS below
        removeElement: function(el) {
          el.style.marginLeft = "-" + (el.getBoundingClientRect().width/2) + "px"
        }
      }
    }
  }
})
```

_Note that `remove` includes `Animated--reverse` which is a simple way to not have to have a duplicate transition (slideIn + reverse => slideOut)._

Here is some css that works well with the above configuration:

```css
/*
  Note: If your content elements don't have a fixed width it can cause
  an issue when positioning absolutely
*/
.js-Pjax { position: relative } /* parent element where switch will be made */

.js-Pjax-child { width: 100% }

/* position for the elements that will be removed */
.js-Pjax-remove {
  position: absolute;
  left: 50%;
  /* transform: translateX(-50%) */
  /* transform can't be used since we already use generic translate for the remove effect (eg animate.css) */
  /* margin-left: -width/2; // made with js */
  /* you can totally drop the margin-left thing from switchesOptions if you use custom animations */
}

/* CSS animations */
.Animated {
  animation-fill-mode: both;
  animation-duration: 1s;
}

.Animated--reverse { animation-direction: reverse }

.Animate--fast { animation-duration: .5s }
.Animate--noDelay { animation-delay: 0s !important;  }

.Animate--slideInRight { animation-name: Animation-slideInRight }

@keyframes Animation-slideInRight {
  0% {
    opacity: 0;
    transform: translateX(100rem);
  }

  100% {
    transform: translateX(0);
  }
}

.Animate--slideInLeft { animation-name: Animation-slideInLeft }

@keyframes Animation-slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100rem);
  }

  100% {
    transform: translateX(0);
  }
}
```

To give context to this CSS, here is an HTML snippet:

```html
<!doctype html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <section class="js-Pjax">
    <div class="js-Pjax-child">
      Your content here
    </div>
    <!--
    During the replacement process, you'll have the following tree:

    <div class="js-Pjax-child js-Pjax-remove Animate...">
      Your OLD content here
    </div>
    <div class="js-Pjax-child js-Pjax-add Animate...">
      Your NEW content here
    </div>

    -->
  </section>
  <script>...</script>
</body>
</html>
```

### `history` (Boolean, default: `true`)

Enable the use of `pushState()`. Disabling this will prevent Pjax from updating browser history. While possible, there is almost no use case where you would want to do this.

Internally, this option is used when a `popstate` event triggers Pjax (to not `pushState()` again).

### `analytics` (Function | Boolean, default: a function that pushes `_gaq` `_trackPageview` or sends `ga` `pageview`

Function that allows you to add behavior for analytics. By default it tries to track
a pageview with Google Analytics (if it exists on the page). It's called every time a page is switched, even for history navigation.

Set to `false` to disable this behavior.

### `scrollTo` (Integer | \[Integer, Integer\] | False, default: `0`)

When set to an integer, this is the value (in px from the top of the page) to scroll to when a page is switched.

When set to an array of 2 integers (\[x, y\]), this is the value to scroll both horizontally and vertically.

Set this to `false` to disable scrolling, which will mean the page will stay in that same position it was before loading the new elements.

### `scrollRestoration` (Boolean, default: `true`)

When set to `true`, Pjax will attempt to restore the scroll position when navigating backwards or forwards.

### `cacheBust` (Boolean, default: `true`)

When set to `true`, Pjax appends a timestamp query string segment to the requested URL in order to skip the browser cache.

### `debug` (Boolean, default: `false`)

Enables verbose mode. Useful to debug page layout differences.

### `currentUrlFullReload` (Boolean, default: `false`)

When set to `true`, clicking on a link that points to the current URL will trigger a full page reload.

When set to `false`, clicking on such a link will cause Pjax to load the current page without a full page reload. If you want to add some custom behavior, add a click listener to the link and call `preventDefault()`. This will prevent Pjax from receiving the event.

**Note**: This must be done before Pjax is instantiated, otherwise Pjax's event handler will be called first, and `preventDefault()` won't have been called yet.

Here is some sample code:

```js
  var links = document.querySelectorAll(".js-Pjax");

  for (var i = 0; i < links.length; i++) {
    var el = links[i]

    el.addEventListener("click", function(e) {
      if (el.href === window.location.href.split("#")[0]) {
        e.preventDefault();

        console.log("Link to current page clicked");
        // Custom code goes here.
      }
    })
  }

  var pjax = new Pjax()
```

(Note that if `cacheBust` is set to `true`, the code that checks if the href is the same as the current page's URL will not work, due to the query string appended to force a cache bust).

### `timeout` (Integer, default: `0`)

The timeout in _milliseconds_ for the XHR requests. Set to `0` to disable the timeout.

## Events

Pjax fires a number of events regardless of how it's invoked.

All events are fired from the _document_, not the link that was clicked.

* `pjax:send` - Fired after the Pjax request begins.
* `pjax:complete` - Fired after the Pjax request finishes.
* `pjax:success` - Fired after the Pjax request succeeds.
* `pjax:error` - Fired after the Pjax request fails. The request object will be passed along as `event.options.request`.

`send` and `complete` are a good pair of events to use if you are implementing a loading indicator (eg: [topbar](http://buunguyen.github.io/topbar/))

```js
document.addEventListener('pjax:send', topbar.show)
document.addEventListener('pjax:complete', topbar.hide)
```

## HTTP Headers

Pjax uses several custom headers when it makes and receives HTTP requests. If the requests are going to your server, you can use those headers for some meta information about the response.

### Request Headers

Pjax sends the following headers with every request:

- `X-Requested-With: "XMLHttpRequest"`
- `X-PJAX: "true"`
- `X-PJAX-Selectors`:
    A serialized JSON array of selectors, taken from `options.selectors`. You can use this to send back only the elements that Pjax will use to switch, instead of sending the whole page. Note that you'll need to deserialize this on the server (Such as by using `JSON.parse()`)

### Response Headers

Pjax looks for the following headers on the response:

- `X-PJAX-URL` or `X-XHR-Redirected-To`

Pjax first checks the `responseURL` property on the XHR object to see if the request was redirected by the server. Most browsers support this, but not all. To ensure Pjax will be able to tell when the request is redirected, you can include one of these headers with the response, set to the final URL.

## DOM Ready State

Most of the time, you will have code related to the current DOM that you only execute when the DOM is ready.

Since Pjax doesn't automatically re-execute your previous code each time you load a page, you'll need to add code to re-trigger the DOM ready code. Here's a simple example:

```js
function whenDOMReady() {
  // do your stuff
}

whenDOMReady()

var pjax = new Pjax()

document.addEventListener("pjax:success", whenDOMReady)
```

_Note: Don't create the Pjax instance in the `whenDOMReady` function._

If you want to just update a specific part (which is a good idea), you can add the DOM-related code in a function and re-execute this function when the `pjax:success` event is fired.

```js
// do your global stuff
//... DOM ready code

function whenContainerReady() {
  // do your container related stuff
}

whenContainerReady()

var pjax = new Pjax()

document.addEventListener("pjax:success", whenContainerReady)
```

## FAQ

### Q: Disqus doesn't work anymore, how can I fix that ?

#### A: There are a few things you need to do:

- Wrap your Disqus snippet into a DOM element that you will add to the `selector` property (or just wrap it with `class="js-Pjax"`) and be sure to have at least an empty wrapper on each page (to avoid differences of DOM between pages).

- Edit your Disqus snippet like the one below.

#### Disqus snippet _before_ Pjax integration

```html
<script>
  var disqus_shortname = 'YOURSHORTNAME'
  var disqus_identifier = 'PAGEID'
  var disqus_url = 'PAGEURL'
  var disqus_script = 'embed.js'

  (function(d,s) {
  s = d.createElement('script');s.async=1;s.src = '//' + disqus_shortname + '.disqus.com/'+disqus_script;
  (d.getElementsByTagName('head')[0]).appendChild(s);
  })(document)
</script>
```

#### Disqus snippet _after_ Pjax integration

```html
<div class="js-Pjax"><!-- needs to be here on every Pjax-ified page, even if empty -->
<!-- if (some condition) { // eventual server-side test to know whether or not you include this script -->
  <script>
    var disqus_shortname = 'YOURSHORTNAME'
    var disqus_identifier = 'PAGEID'
    var disqus_url = 'PAGEURL'
    var disqus_script = 'embed.js'

    // here we will only load the disqus <script> if not already loaded
    if (!window.DISQUS) {
      (function(d,s) {
      s = d.createElement('script');s.async=1;s.src = '//' + disqus_shortname + '.disqus.com/'+disqus_script;
      (d.getElementsByTagName('head')[0]).appendChild(s);
      })(document)
    }
    // if disqus <script> is already loaded, we just reset disqus the right way
    // see https://help.disqus.com/developer/using-disqus-on-ajax-sites
    else {
      DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = disqus_identifier
          this.page.url = disqus_url
        }
      })
    }
  </script>
<!-- } -->
</div>
```

**Note: Pjax only handles inline `<script>` blocks for the container you are switching.**

## Examples

Clone this repository and run `npm run example`, which will open the example app in your browser.

## CONTRIBUTING

- ⇄ Pull requests and ★ Stars are always welcome.
- For bugs and feature requests, please create an issue.
- Pull requests must be accompanied by passing automated tests (`npm test`). If the API is changed, please update the Typescript definitions as well (`pjax.d.ts`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)
