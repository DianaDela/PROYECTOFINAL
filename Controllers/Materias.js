const{request, response,} = require("express")
const pool = require("../db/connection")
const modelsMaterias = require("../models/Materias")

const getNombre = async (req = reques, res = response) => {
    let connection
    try{
        conn = await pool.getConnection() //realizamos la conexion

        //generamos la consulta
        const Materia = await conn.query("SELECT * FROM Materias", (error) => {if (error) throw error})

        if(!Materia){//En caso de no haber registros informamos
            res.status(404).json({msg: "No existen Materias registradas"})
            return
        }
        res.json({Materia})
    }catch (error){

        console.log(error)
        res.status(500).json({msg: error})//informanos del error
    } finally{
        if (conn) conn.end() //termina la conexion

    }
}

const addCan = async (req = request, res = response) =>{
    const {ID, Materia, Profesor, Total_Alum, Asistieron, Fecha, Activo} = req.body

    if(!ID || !Materia || !Profesor || !Total_Alum || !Asistieron || !Fecha || !Activo){
        res.status(400).json({msg: "Faltan Datos"})
        return
    }

    let conn
    try{
        conn = await pool.getConnection()//realizamos la conexion

        //generamos la consulta
        const [CanExits] = await conn.query(`SELECT Materia FROM Materias WHERE Materia ='?'`, [Materia])

        if(CanExits){
            res.status(404).json({msg: `La Materia '${Materias}' ya se encuentra registrado`})
            return
        }

                 //generamos la consulta
                 const result = await conn.query(`INSERT INTO Materias
                   (ID,
                    Materia,
                    Profesor,
                    Total_Alum,
                    Asistieron,
                    Fecha,
                    Activo) VALUES ('${ID}', '${Materia}', '${Profesor}', '${Total_Alum}', '${Asistieron}', '${Fecha}', '${Activo}')`,
                         (error) => {if(error) throw error})

                    if (result.affectedRows === 0) {//en caso de no haber registros lo informamos
                    res.status(400).json({msg: `No se puede agregar la materia`})
                    }
                    res.json({msg: `Se agrego satisfactoriamente la materia`})//se manda la lista de usuarios 
    }catch (error){
        console.log(error)
        res.status(500).json({msg: error}) //informamos el error
    } finally{
        if (conn) conn.end() //termina la conexion

    }

}

const getCanByID = async (req = request, res = response) =>{
    const {ID} = req.body
    let conn
    try{
        conn = await pool.getConnection() //realizamos la conexion

        //generamos la consulta
        const [Materias] = await conn.query(modelsMaterias.queryGetUsersByID, [ID], (error) => {if (error) throw error})
        console.log(Materias)

        if(!Materias){ //En caso de no haber registros lo informamos
            res.status(404).json({msg: `No existen materias registradas con el ID ${ID}`})
            return
        }
        res.json({Materias})
    }catch (error){

        console.log(error)
        res.status(500).json({msg: error}) //informamos del error
    } finally{
        if (conn) conn.end() //termina la conexion

    }


}

const deleteCanByID = async (req = request, res = response) =>{
    const {ID} = req.body
    let conn
    try{
        conn = await pool.getConnection() //realizamos la conexion

        //generamos la consulta 
        const result = await conn.query(modelsMaterias.queryDeleteUsersByID, [ID], (error) => {if (error) throw error})
        console.log(result.affectedRows)

        if(result.affectedRows === 0){ //en caso de no haber registros lo informamos
            res.status(404).json({msg: `No existen materias registrados con el ID ${ID}`})
            return
        }

        res.json({msg: `Se elimino la materia con el ID ${ID}`})
    }catch (error){

        console.log(error)
        res.status(500).json({msg: error}) //informamos del error
    }finally{
        if (conn) conn.end() //termina la conexion

    }


}

module.exports = {getNombre, addCan, getCanByID, deleteCanByID}