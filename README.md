# click-prefetch

click-prefetch uses *just-in-time preloading* — it preloads a page right before a user clicks on it.

Before a user clicks on a link, they hover their mouse over that link. When a user has hovered for 65 ms there is one chance out of two that they will click on that link, so click-prefetch starts preloading at this moment, leaving on average over 300 ms for the page to preload.

On mobile, a user starts touching their display before releasing it, leaving on average 90 ms to preload the page

## example

You can open <https://jinjun1994.github.io/Frontend-Knowledge-Base/> to see it.

## install

```bash
npm i click-prefetch
```

## use in webpack

```js
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName:"click-prefetch"*/ 
    'click-prefetch').then(({default: func}) => {
		func();
	})
```

example  in vue

```js
 mounted () {
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName:"click-prefetch"*/ 
    'click-prefetch').then(({default: func}) => {
		func();
	})
  }
```

You can decide when to run the function

## use in module

You can use all kind of module syntax 

es6 module

```js

import  clickPrefetch from 'click-prefetch'
  clickPrefetch()

```

commonjs 

```js
var clickPrefetch = require('click-prefetch');
  clickPrefetch()
```

and more like AMD module

## use in script

You can decide when to run.

you can change '1.0.8' to  latest version.

```js
<script type="module">
import clickPrefetch from 
'https://cdn.jsdelivr.net/npm/click-prefetch@1.0.8';
  clickPrefetch()
</script>
```

or 

```js
<script src="https://cdn.jsdelivr.net/npm/click-prefetch@1.0.8"></script>

<script>
windows.click-prefetch.default()
</script>
// 
```



or use the clickPrefetch()  already running

```js
<script src="https://cdn.jsdelivr.net/npm/click-prefetch@1.0.8/dist/es6-ran.js"></script>

```





## Cheating the brain

The humain brain perceives actions taking less than 100 ms as instant.  As a result, it makes your site feel instant even on 3G (assuming your pages are fast to render).

## Easy on your server and your user’s data plan

Pages are preloaded only when there’s a good chance that a user is going to visit them, and it preloads only the HTML of that page, being respectful of your users’ and servers’ bandwidth and CPU. It’s 1 kB and loads after everything else. And it’s free and open source (MIT license).