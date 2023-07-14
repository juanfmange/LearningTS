(() => {
    
    type Hero = {
        name: string,
        age?: number,
        powers: number[],
        getName?: () => string
    }

    
    let myVariable: string | number | Hero = 'juanelo';

    myVariable = 20;
    console.log(typeof myVariable);

    myVariable = {
        name: 'paco',
        powers: [1]
    }

})()