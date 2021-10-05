
function Clear(){
    
 
    var dict = {'message':null};
    console.log(dict);
    window.localStorage.setItem('current', JSON.stringify(dict));
}
function Enter(){
    var dict = JSON.parse(window.localStorage.getItem('current'));
  
    if(dict!=null){
        console.log(dict['message']);
    }
    Clear();
}
function Help(){
    console.log("Help is needed");
}
