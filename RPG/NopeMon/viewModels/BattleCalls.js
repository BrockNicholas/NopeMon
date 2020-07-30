var pre = 'https://reqres.in/';

function GetMyNope(){
    return Sender("GET", "api/users?page=2");
}

function Sender(method, path){
    return new Promise(resolve => {

        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(this.responseText));
            }
        };

        xml.open(method, pre + path, true);
        xml.send();

    })

    
}
