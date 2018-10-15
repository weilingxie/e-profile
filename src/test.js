let S = "javaranch big moose saloon";
let K = 10;

function solution(S, K) {
    let locations = [];
    let lastIndex = 0;
    let len = S.length;
    let result = [];

    if(len<=K){
        return S;
    }else{
        while (S.indexOf(" ",lastIndex)>-1){
            lastIndex += S.indexOf(" ");
            locations.push(lastIndex);
        }
        //console.log(locations);
        if(locations.length==1){
            result.push(S.slice(0,locations[0]));
            result.push(S.slice(locations[0]+1,len));
        }else{
            let lastIndex = 0;
            for(let i=1; i<locations.length; i++){
                //console.log("loation[i]:" + locations[i]);
                //console.log("loation[i-1]:" + locations[i-1]);
                //console.log("lastIndex:" + lastIndex);
                if((locations[i]-lastIndex)>K && (locations[i-1]-lastIndex)<=K){
                    result.push(S.slice(lastIndex,locations[i-1]));
                    lastIndex = locations[i-1] + 1;
                }

                if(i==(locations.length-1)){
                    result.push(S.slice(lastIndex+1,S.length));
                }
            }
        }
               
        return result;
    }

}    

console.log(solution('SMS messages are really short', 12));
console.log(solution('SMS messages are really short', 12).length);