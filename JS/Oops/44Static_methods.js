class Animal{
    constructor(name){
        // this.name = name;
        this.name = Animal.capitalize(name);
    }
    walk(){
        // console.log("Animal "+ Animal.capitalize(this.name) +" walking"  );
        console.log("Animal "+ this.name +" walking"  );//2
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substring(1, name.length);
    }
}

// j = new  Animal("Monkey");
j = new  Animal(Animal.capitalize("Monkey"));//2
j.walk();
// j.capitalize("Monkey");//Not work here (jab hum chahte hai ki ek method ko class ke andar dalna bhi chahte hai aur uske objects available bhi nahi karana chahte)
