function megaFriend(friends){
    var maxString=friends[0];
    
for(var i=1;i<friends.length; i++){      // for loop that runs finding array length

    if(friends[i].length>maxString.length){
        maxString=friends[i];
    }
}
return maxString; //function return
}
var largestName=megaFriend(["Arafat", "Al Amin Khan"]); //calling function
console.log(largestName);