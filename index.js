var FirstScript = /** @class */ (function () {
    function FirstScript() {
    }
    FirstScript.addToStorage = function (abtn, rbtn, key, value) {
        this.addbtn = document.getElementById(abtn);
        this.rembtn = document.getElementById(rbtn);
        this.rembtn.style.visibility = 'visible';
        this.addbtn.style.visibility = 'hidden';
        sessionStorage.setItem(key, value);
    };
    FirstScript.remFromStorage = function (abtn, rbtn, key) {
        this.addbtn = document.getElementById(abtn);
        this.rembtn = document.getElementById(rbtn);
        this.rembtn.style.visibility = 'hidden';
        this.addbtn.style.visibility = 'visible';
        sessionStorage.removeItem(key);
    };
    FirstScript.checkStorage = function () {
        if (sessionStorage.length != 0) {
            if (sessionStorage.getItem('item1') == "Chanel Perfume+3800") {
                this.addbtn = document.getElementById('addbtn1');
                this.rembtn = document.getElementById('rembtn1');
                this.addbtn.style.visibility = 'hidden';
                this.rembtn.style.visibility = 'visible';
            }
            if (sessionStorage.getItem('item2') == "Chanel Coat+8500") {
                this.addbtn = document.getElementById('addbtn2');
                this.rembtn = document.getElementById('rembtn2');
                this.addbtn.style.visibility = 'hidden';
                this.rembtn.style.visibility = 'visible';
            }
            if (sessionStorage.getItem('item3') == "Chanel Earrings+2500") {
                this.addbtn = document.getElementById('addbtn3');
                this.rembtn = document.getElementById('rembtn3');
                this.addbtn.style.visibility = 'hidden';
                this.rembtn.style.visibility = 'visible';
            }
        }
    };
    return FirstScript;
}());
