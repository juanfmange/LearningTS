(() => {
    

    class Avenger{
        // private name: string;
        // public team: string;
        // public realName?: string;
        static avgAge: number = 35;

        constructor(private name:string,private team: string,public realName?:string) { //fornma corta de declarar la clase
            this.name = name;
            this.team = team;
            this.realName = realName;
        }


    }

    const antman: Avenger = new Avenger('Antman','Capitan');
    console.log(antman);


})()