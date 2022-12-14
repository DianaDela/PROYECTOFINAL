const{request, response} = require("express")
const pool = require("../db/connection")
const modelsAlumnos = require("../models/Alumnos")

const getNombre = async (req = reques, res = response) => {
    let connection
    try{
        conn = await pool.getConnection() //realizamos la conexion

        //generamos la consulta
        const Nombre = await conn.query("SELECT *FROM Alumnos", (error) => {if (error) throw error})

        if(!Nombre){//En caso de no haber registros informamos
            res.status(404).json({msg: "No existen Alumnos registrados"})
            return
        }
        res.json({Nombre})
    }catch (error){

        console.log(error)
        res.status(500).json({msg: error})//informanos del error
    } finally{
        if (conn) conn.end() //termina la conexion

    }
}

const addCan = async (req = request, res = response) =>{
    const {Matricula, Nombre, Apellidos, Edad, Numero, Correo, Activo} = req.body

    if(!Matricula || !Nombre || !Apellidos || !Edad || !Numero || !Correo || !Activo){
        res.status(400).json({msg: "Faltan Datos"})
        return
    }


    let conn
    try{
        conn = await pool.getConnection()//realizamos la conexion

        //generamos la consulta
        const [CanExits] = await conn.query(`SELECT Nombre FROM Alumnos WHERE Nombre ='?'`, [Nombre])

        if(CanExits){
            res.status(404).json({msg: `El Alumno'${Nombre}' ya se encuentra registrado`})
            return
        }

                 //generamos la consulta
                 const result = await conn.query(`INSERT INTO Alumnos
                   (Matricula,
                    Nombre,
                    Apellidos,
                    Edad,
                    Numero,
                    Correo,
                    Activo) VALUES ('${Matricula}', '${Nombre}', '${Apellidos}', '${Edad}', '${Numero}', '${Correo}', '${Activo}')`,
                         (error) => {if(error) throw error})

                    if (result.affectedRows === 0) {//en caso de no haber registros lo informamos
                    res.status(400).json({msg: `No se puede agregar el Alumno`})
                    }
                    res.json({msg: `Se agrego satisfactoriamente el Alumno`})//se manda la lista de usuarios 
    }catch (error){
        console.log(error)
        res.status(500).json({msg: error}) //informamos el error
    } finally{
        if (conn) conn.end() //termina la conexion

    }

}

const getCanByID = async (req = request, res = response) =>{
    const {Matricula} = req.body
    let conn
    try{
        conn = await pool.getConnection() //realizamos la conexion

        //generamos la consulta
        const [Alumnos] = await conn.query(modelsAlumnos.queryGetUsersByID, [Matricula], (error) => {if (error) throw error})
        console.log(Alumnos)

        if(!Alumnos){ //En caso de no haber registros lo informamos
            res.status(404).json({msg: `No existen Alumnos registrados con la Matricula ${Matricula}`})
            return
        }
        res.json({Alumnos})
    }catch (error){

        console.log(error)
        res.status(500).json({msg: error}) //informamos del error
    } finally{
        if (conn) conn.end() //termina la conexion

    }


}

const deleteCanByID = async (req = request, res = response) =>{
    const {Matricula} = req.body
    let conn
    try{
        conn = await pool.getConnection() //realizamos la conexion

        //generamos la consulta 
        const result = await conn.query(modelsAlumnos.queryDeleteUsersByID, [Matricula], (error) => {if (error) throw error})
        console.log(result.affectedRows)

        if(result.affectedRows === 0){ //en caso de no haber registros lo informamos
            res.status(404).json({msg: `No existen Alumnos registrados con la matricula ${Matricula}`})
            return
        }

        res.json({msg: `Se elimino el alumno con la matricula ${Matricula}`})
    }catch (error){

        console.log(error)
        res.status(500).json({msg: error}) //informamos del error
    }finally{
        if (conn) conn.end() //termina la conexion

    }


}

module.exports = {getNombre, addCan, getCanByID, deleteCanByID}