exports.preyectosHome = (req, res) =>{
    res.render('index',{
        nombrePagina: 'Proyectos'
    })
}

exports.nuevoProyecto = (req, res) => {
    res.render('nuevoProyecto',{
        nombrePagina: 'nuevoProyecto'
    })
}

exports.crearProyecto = (req, res) => {
   //const nombre = req.body
   const errores = []
   console.log(req)
/*
   if (!nombre) {
       errores.push({'texto':   'Agregar un nombre al Proyecto'})
   }
   if (errores.length > 0) {
       res.render('nuevoProyecto',{
           nombrePagina: 'Nuevo Proyecto',
           errores
       })

    }
    */   
}