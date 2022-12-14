const modelsAlumnos = {
    queryGetUsers: "SELECT * FROM Asistencia",
    queryGetUsersByID:`SELECT * FROM Alumnos WHERE Matricula = ?`,
    queryDeleteUsersByID: `UPDATE Alumnos SET Activo = 'N' WHERE Matricula = ?`,
    queryUserExists: `SELECT Nombre FROM Alumnos WHERE Nombre = '?'`,
    queryAddUser:
    `INSERT INTO Alumnos(
                            Matricula,
                            Nombre,
                            Apellidos, 
                            Edad, 
                            Numero,
                            Correo,
                            Activo)
                        VALUES (
                            ?,?,?,?,?,?,?,?)`,
    querySignIn: `SELECT Contrasena, Activo FROM Alumnos WHERE Alumnos = ?`
                        }
    module.exports = modelsAlumnos