const of = 'de';

export const locateEs = {
  firstDayOfWeek: 1,
  dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
  monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
  monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  today: "Hoy",
  clear: "Claro"
};
export const addZeros = (n) => {
  const num = parseInt(n);
  return num < 10 ? `0${num}` : '' + num;
}
export const generateDateString = date => `${addZeros(date.getDay())} ${locateEs.monthNamesShort[date.getDate()]} ${date.getFullYear()}`;
export const generateDateMount = date => `${addZeros(date.getDay())} ${of} ${locateEs.monthNames[date.getDate()]}`