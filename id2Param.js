// id2Param: cleans the value in the URL parameter and inserts it into HTML tag with matching ID.
function id2Param(paramName, replaceID) {
    fetchedParam = new URL(location.toLocaleString()).searchParams.get(paramName)
    if (fetchedParam) {
      let cleanString = fetchedParam.replace(/[^a-zA-Z 0-9 . -]/g, "")
      document.getElementById(replaceID).innerHTML = cleanString
    }
}
