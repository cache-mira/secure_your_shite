# Vanilla JavaScript
## id2param
**Source:** https://the-red.team/

Replaces given HTML element with cleaned URL parameter.
Allows all numbers, letters, period \(.\) and dash \(-\).

```javascript
function id2Param(paramName, replaceID) {
    fetchedParam = new URL(location.toLocaleString()).searchParams.get(paramName)
    if (fetchedParam) {
    let cleanString = fetchedParam.replace(/[^a-zA-Z 0-9 . -]/g, "")
    document.getElementById(replaceID).innerHTML = cleanString
    }
}
```
