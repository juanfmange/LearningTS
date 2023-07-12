(()=>{

    const fullName = (firstName:string, lastName?:(string|boolean)):string => {
      return `${firstName} ${lastName || 'sin apellido'}`
  }

    const name = fullName('Tony');

    console.log({ name });
    
})()

