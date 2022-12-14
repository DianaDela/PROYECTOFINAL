const modelsMaterias = {
    queryGetUsers: "SELECT * FROM Materias",
    queryGetUsersByID:`SELECT * FROM Materias WHERE ID = ?`,
    queryDeleteUsersByID: `UPDATE Materias SET Activo = 'N' WHERE ID = ?`,
    queryUserExists: `SELECT Materias FROM Materias WHERE Materias = '?'`,
    queryAddUser:
    `INSERT INTO Materias(
                            ID,
                            Materia,
                            Profesor, 
                            Total_Alum, 
                            Asistencia,
                            Fecha,
                            Correo,
                            Activo)
                        VALUES (
                            ?,?,?,?,?,?,?,?)`,
    querySignIn: `SELECT Contrasena, Activo FROM Materias WHERE Materias = ?`
                        }
    module.exports = modelsMaterias