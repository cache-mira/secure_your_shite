// param2id: cleans the value in the URL parameter and inserts it into HTML tag with matching ID.
// example ---  replace title with value from search parameter ("test").
// https://example.com/?search=test
// param2id('search', 'title')


function param2id(paramName, replaceID) {
    fetchedParam = new URL(location.toLocaleString()).searchParams.get(paramName)
    if (fetchedParam) {
    var cleanString = fetchedParam.replace(/[^a-zA-Z 0-9 . -]/g, "")
    document.getElementById(replaceID).innerHTML = cleanString
    }
}
