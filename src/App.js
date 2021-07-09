
class App {
    constructor(name = 'Top Manager'){
        this.name = name;
    }
    greeting(){
        console.log(`Hi! I am ${this.name}. Welcome to app =)`);
    }
}

export { App };