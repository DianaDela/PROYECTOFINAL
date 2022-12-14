const{Router} =require("express")
const {getNombre, addCan, getCanByID, deleteCanByID} =require("../Controllers/Materias")
const router = Router()

//http:localhost:4000/api/v1/Materias/

//GET 
router.get("/", getNombre)

//POST 
router.post("/", addCan)

//GET
router.get("/ID/", getCanByID)

//DELETE
router.delete("/ID/", deleteCanByID)

module.exports = router