(() => {
    
    let flash:{name:string,age?:number,powers:string[], getName?: ()=> string} = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }
    console.log(flash);
    flash = {
        'name': 'juanelo',
        //'age': 25,
        'powers': ['es buenisimo'],
        getName() {
            return this.name;
        }
    }



})()