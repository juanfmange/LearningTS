(()=>{
    const addNumbers = (a: number, b: number) => {
        return a + b;
    }

    const greet = (name: string) => {
        return `Hola ${name}`
    }
    
    const save = () => {
        return `salvalos`
    }
    
    let miFuncion;
    // miFuncion = 10;
    // console.log(miFuncion);

    miFuncion = addNumbers;
    console.log(miFuncion(1, 2));
    
    miFuncion = greet;
    console.log(miFuncion('holaaaa'));

    miFuncion = save;
    console.log(miFuncion());

})()

