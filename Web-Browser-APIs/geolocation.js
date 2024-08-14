/*   Syntax
getCurrentPosition(success)
getCurrentPosition(success, error)
getCurrentPosition(success, error, options)
*/

function curSuccess(position) {
    console.log(position)
}

function curError(error) {
    console.log(`Error: ${error.code} - ${error.message}`);
}

const options = {};


navigator.geolocation.getCurrentPosition(curSuccess, curError, options);