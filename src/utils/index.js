export function transPrams(data){
    // {name:mumu,age:18} => name=mumu&age=18
    var str="";
    for(var k in data){
        str+=k+"="+data[k]+"&"
    }
    return str.slice(0,-1);
}