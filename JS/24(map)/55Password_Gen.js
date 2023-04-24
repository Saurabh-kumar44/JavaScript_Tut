class password {
    constructor(){
        document.write(`<h1>Welcome to generator password<h1/>`)
        this.pass = ''
    }
    generatePassword(len) {
        let chars = "abcdefghijklmnopqrstuvwxyz"
            let numbers = "0123456789"
            let special = "@#$%^&*()!<>/"
        if(len<3){
            console.log("Your password should atleat 3 characters");
        }
        else{
            let i = 0;
            while(i < len){
                this.pass += chars[(Math.floor(Math.random() * chars.length))]
                this.pass += numbers[(Math.floor(Math.random() * numbers.length))]
                this.pass += special[(Math.floor(Math.random() * special.length))]
                i+=3
            }
            this.pass = this.pass.substr(0, 7)
            return this.pass
        }
    }
}

let p = new password();
document.write(`<h2><br>${p.generatePassword(7)}<h2/>`)  