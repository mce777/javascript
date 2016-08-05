// closure examples from mpj

var me = 'Bruce Wayne'
function greetMe() {
    console.log('Hello, ' + me + '!')
}
greetMe() // Hello, Bruce Wayne!
// note how greetMe() has access to "me" which is defined OUTSIDE of the function
// that is what makes it a closure :)

// second example
function sendRequest() {
    var requestID = '123'
    $.ajax({
        url: '/myUrl',
        success: function(response) {
            alert('Request ' + requestID + ' returned')
        }
    });
}