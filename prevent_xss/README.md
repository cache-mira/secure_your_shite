# Vanilla JavaScript
## id2param
**Source:** https://the-red.team/

Cleans the value in the URL parameter and inserts it into HTML tag with matching ID.
**Example**
Replace HTML element containing id="title" with value from search parameter ("test").

**URL:** https://example.com/?search=test 

**On Page:** param2id('search', 'title')
```html
<h1 id="title> test </h1>
```

```javascript
function param2id(paramName, replaceID) {
    fetchedParam = new URL(location.toLocaleString()).searchParams.get(paramName)
    if (fetchedParam) {
    var cleanString = fetchedParam.replace(/[^a-zA-Z 0-9 . -]/g, "")
    document.getElementById(replaceID).innerHTML = cleanString
    }
}
```
