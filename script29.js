function add(first, second, callback) {
     console.log(first+second);
     callback();
}

add(2,3, function(){
     console.log('done');
});
add(4,5, function(){
     console.log('done again');
});
