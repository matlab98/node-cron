const sql = require("mssql");

const config = {
  user: "usuario",
  password: "contraseña",
  server: "servidor",
  database: "basedatos",
  options: {
    encrypt: true, // en caso de que la conexión requiera cifrado SSL
  },
};

sql.connect(config, function (err) {
  if (err) console.log(err);
});

const request = new sql.Request();
request.execute(
  "nombre_del_stored_procedure",
  function (err, recordsets, returnValue) {
    if (err) console.log(err);
    console.log(recordsets);
  }
);

sql.close();
