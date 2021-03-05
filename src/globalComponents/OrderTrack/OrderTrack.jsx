import React from 'react';
import './styles.css';

/**
 * **Example**
 * ```
 * <OrderTrack steps={[
 *     { isCompleted: true, datestamp: new Date() },
 *     { isCompleted: true, datestamp: new Date() },
 *     { isCompleted: true, datestamp: new Date() },
 *     { isCompleted: false, datestamp: new Date() },
 *     { isCompleted: false, datestamp: new Date() }
 * ]} />
 * ```
 *
 * **Parameters**
 *
 * All parameters are required
 *
 * - **isCompleted** [boolean]: is true when step is completed
 * - **datestamp** [boolean]: date of action
 * @param {{ steps }} params Parameters
 */
export const OrderTrack = ({ steps = [] }) => {
  const locateEs = {
    firstDayOfWeek: 1,
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    today: "Hoy",
    clear: "Claro"
  };
  const of = 'de';
  const addZeros = (n) => {
    const num = parseInt(n);
    return num < 10 ? `0${num}` : '' + num;
  }
  const generateDateString = date => `${addZeros(date.getDay())} ${locateEs.monthNamesShort[date.getDate()]} ${date.getFullYear()}`;
  const generateDateMount = date => `${addZeros(date.getDay())} ${of} ${locateEs.monthNames[date.getDate()]}`
  const dates = steps.map((step) => ({
    date: generateDateString(step.datestamp),
    hour: step.datestamp.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' })
  }))
  return (
    <ul>
      <li className="mb-4">
        <ul>
          <li className="flex justify-between items-center">
            <div className="flex flex-row items-center">
              <div className={`h-6 w-6 rounded-full mr-6 ${steps[0]?.isCompleted === true ? 'bg-primary' : 'OrderTrack__incompleted bg-background01 border-primary'}`}></div>
              <span className="text-lg text-white">Compra realizada</span>
            </div>
            <span className="text-xs text-background03 text-right">{steps[0]?.isCompleted === true ? dates[0]?.date : ''}</span>
          </li>
          <li className="flex justify-between items-baseline">
            <div className="flex flex-row items-center relative">
              <div className=" OrderTrack__line bg-primary"></div>
              <span className="text-xs text-background03 ml-12">{steps[0]?.isCompleted === true ? 'Hemos recibido tu compra' : 'Estamos procesando tu compra'}</span>
            </div>
            <span className="text-xs text-background03 text-right">{steps[0]?.isCompleted === true ? dates[0]?.hour : ''}</span>
          </li>
        </ul>
      </li>
      <li className="mb-4">
        <ul>
          <li className="flex justify-between items-center">
            <div className="flex flex-row items-center">
              <div className={`h-6 w-6 rounded-full mr-6 ${steps[1]?.isCompleted === true ? 'bg-primary' : 'OrderTrack__incompleted bg-background01 border-primary'}`}></div>
              <span className="text-lg text-white">En procesamiento</span>
            </div>
            <span className="text-xs text-background03 text-right">{steps[1]?.isCompleted === true ? dates[1]?.date : ''}</span>
          </li>
          <li className="flex justify-between items-baseline">
            <div className="flex flex-row items-center relative">
              <div className=" OrderTrack__line bg-primary"></div>
              <span className="text-xs text-background03 ml-12">{steps[1]?.isCompleted === true ? 'Estamos empacando tu compra' : 'Estamos empacando tu compra'}</span>
            </div>
            <span className="text-xs text-background03 text-right">{steps[1]?.isCompleted === true ? dates[1]?.hour : ''}</span>
          </li>
        </ul>
      </li>
      <li className="mb-4">
        <ul>
          <li className="flex justify-between items-center">
            <div className="flex flex-row items-center">
              <div className={`h-6 w-6 rounded-full mr-6 ${steps[2]?.isCompleted === true ? 'bg-primary' : 'OrderTrack__incompleted bg-background01 border-primary'}`}></div>
              <span className="text-lg text-white">Enviada</span>
            </div>
            <span className="text-xs text-background03 text-right">{steps[2]?.isCompleted === true ? dates[2]?.date : ''}</span>
          </li>
          <li className="flex justify-between items-baseline">
            <div className="flex flex-row items-center relative">
              <div className=" OrderTrack__line bg-primary"></div>
              <span className="text-xs text-background03 ml-12">{steps[2]?.isCompleted === true ? 'Tu paquete ha sido enviado' : 'A punto de enviarlo'}</span>
            </div>
            <span className="text-xs text-background03 text-right">{steps[2]?.isCompleted === true ? dates[2]?.hour : ''}</span>
          </li>
        </ul>
      </li>
      <li className="mb-4">
        <ul>
          <li className="flex justify-between items-center">
            <div className="flex flex-row items-center">
              <div className={`h-6 w-6 rounded-full mr-6 ${steps[3]?.isCompleted === true ? 'bg-primary' : 'OrderTrack__incompleted bg-background01 border-primary'}`}></div>
              <span className="text-lg text-white">En proceso de entrega</span>
            </div>
            <span className="text-xs text-background03 text-right">{steps[3]?.isCompleted === true ? dates[3]?.date : ''}</span>
          </li>
          <li className="flex justify-between items-baseline">
            <div className="flex flex-row items-center relative">
              <div className=" OrderTrack__line bg-primary"></div>
              <span className="text-xs text-background03 ml-12">{steps[3]?.datestamp ? `Entrega estimada para el ${generateDateMount(steps[3].datestamp)}` : ''}</span>
            </div>
            {/* <span className="text-xs text-background03 text-right">10:30 AM</span> */}
          </li>
        </ul>
      </li>
      <li className="mb-4">
        <ul>
          <li className="flex justify-between items-center">
            <div className="flex flex-row items-center">
              <div className={`h-6 w-6 rounded-full mr-6 ${steps[4]?.isCompleted === true ? 'bg-primary' : 'OrderTrack__incompleted bg-background01 border-primary'}`}></div>
              <span className="text-lg text-white">Entregado</span>
            </div>
            <span className="text-xs text-background03 text-right">{steps[4]?.isCompleted === true ? dates[4]?.date : ''}</span>
          </li>
          <li className="flex justify-between items-baseline">
            <span className="text-xs text-background03 ml-12">{steps[4]?.datestamp ? `Tu paquete fue entregado el ${generateDateMount(steps[3].datestamp)}` : ''}</span>
            {/* <span className="text-xs text-background03 text-right">10:30 AM</span> */}
          </li>
        </ul>
      </li>
    </ul>
  )
}
