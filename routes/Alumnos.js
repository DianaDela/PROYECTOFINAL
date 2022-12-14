const{Router} =require("express")
const {getNombre, addCan, getCanByID, deleteCanByID} =require("../Controllers/Alumnos")
const router = Router()

//http:localhost:4000/api/v1/users/

//GET 
router.get("/", getNombre)

//POST 
router.post("/", addCan)

//GET
router.get("/matricula/", getCanByID)

//DELETE
router.delete("/matricula/", deleteCanByID)

module.exports = router