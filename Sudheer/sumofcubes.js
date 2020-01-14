//sumofcubes
//https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript

function sumCubes(n){
  var i;
    var cube=0;
    for(i = 1 ; i<= n ; i++)
        {
         cube=cube+i*i*i;
        }
    return cube;
}



    