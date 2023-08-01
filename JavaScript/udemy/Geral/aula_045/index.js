
const n = "a"
try {
    if (isNaN(n)){
        throw 'is NaN'
    }
    console.log('Is Number');
} catch (error) {
    console.log(error);
} finally {
    console.log(n);
}