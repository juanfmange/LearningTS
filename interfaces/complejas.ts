(() => {
    
    interface Client {
        name: string;
        age?: number;
        adress: Adress;
        getFullAd?(id: string):void;
    }

    interface Adress{
        id: number;
        cp: number;
        city: string;
    }
    const client: Client = {
        name: 'juan',
        age: 25,
        adress: {
            id: 124,
            cp: 94293,
            city: 'CDMX'
        }
    }

    const client2: Client = {
        name: 'paco',
        adress: {
            id: 125,
            cp: 94297,
            city: 'CDMX'
        }
    }

    console.log(client.adress.city);

    
})()