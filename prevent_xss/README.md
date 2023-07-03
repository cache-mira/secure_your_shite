# Vanilla JavaScript
## param2id
**Source:** https://the-red.team/

Cleans the value in the URL parameter and inserts into HTML tag with matching `id`.

EXAMPLE
----
Replace HTML element containing id="title" with value from search parameter ("test").

**URL**
```
https://example.com/?search=test 
```

**On Page:** 
```html 
<h1 id="title"></h1>

<script src=param2id.js>
    param2id('search', 'title')
</script>

```

... becomes ... 

```html
<h1 id="title"> test </h1>
```

**JS file**
```javascript
function param2id(paramName, replaceID) {
    fetchedParam = new URL(location.toLocaleString()).searchParams.get(paramName)
    if (fetchedParam) {
    var cleanString = fetchedParam.replace(/[^a-zA-Z 0-9 . -]/g, "")
    document.getElementById(replaceID).innerHTML = cleanString
    }
}
```
