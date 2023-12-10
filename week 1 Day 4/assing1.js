function find (object, keyword) {
    return object.filter((obj) => {
        for(let key in obj){
                if(obj[key].toString().toLowerCase().includes(keyword.toLowerCase())){
                    return true;
                }
        }
        return false;
    })
}
console.log(find([
{title: "white fang", autor: "Jack London"},
{title: "The Adventures of tom Sawyer", autor: "Mark Twain"}
],'Mark'));