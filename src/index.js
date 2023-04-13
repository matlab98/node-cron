const cron = require('node-cron');
const moment = require('moment-timezone');
const holidays = require('holidays-co');

function comprobarFeriado() {
  const fechaActual = moment().tz('America/Bogota').format('YYYY-MM-DD');
  const diaSemana = moment().tz('America/Bogota').format('d');
  if (diaSemana !== '0' && holidays.isHoliday(new Date(fechaActual)) === false) {
    console.log(`El ${fechaActual} no es feriado en Colombia y es día hábil.`);
  }
}

// Se ejecuta de lunes a viernes de 7 am a 7 pm
cron.schedule('0 7-18 * * 1-5', () => {
  comprobarFeriado();
});

// Se ejecuta los sábados de 7 am a 2 pm
cron.schedule('0 7-13 * * 6', () => {
  comprobarFeriado();
});
