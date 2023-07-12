(()=>{

    const err = (msg: string): (never | number) => { // Never = La funcion no debe de terminar exitosamente
        if (false) {
                    throw new Error(msg)

        }
        return 1;

    }
    err('auxilio')

})()

