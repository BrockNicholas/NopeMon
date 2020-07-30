var pre = 'https://reqres.in/';

function GetMyNope(){
    return Sender("GET", "api/users?page=2");
}

function Sender(method, path){
    return new Promise(resolve => {

        var xhhtp = new XMLHttpRequest();
        xhhtp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                resolve(this.responseText);
            }
        };

        xhhtp.open(method, pre + path, true);
        xhhtp.send();

    })

    
}
