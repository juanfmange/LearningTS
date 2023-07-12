(()=>{

    const fullName = (firstName: string, lastName?: (string | boolean), upper: boolean = false): string => {
    
    
        if (upper) {
            return `${firstName} ${lastName || 'sin apellido'}`.toUpperCase();
        } else {
            return `${firstName} ${lastName || 'sin apellido'}`;
        }
    }
    const name = fullName('Tony','mange',true);

    console.log({ name });
    
})()

