
// You should implement your task here.
module.exports = function towelSort (matrix) {


if (arguments.length === 0) {
    return []
}

if (Array.isArray(matrix)){
    if (matrix.length === 0) {
        return []
    }
}

let res =[];
if (matrix.length>0 && arguments.length>0){

    matrix.forEach((item, index) =>{
         if (index % 2 === 0){
             for (let i = 0; i < item.length; i++){
                 res.push(item[i]);
             }
         } else {
             for (let j = (item.length-1); j >=0; j--){
                 res.push(item[j]);
             }
         } 
    }); 


} return res;
}
