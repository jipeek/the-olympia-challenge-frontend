import React, { useState } from 'react';
import './styles.css';
/**
 * Tabs Component
 *
 * **Example**
 *
 * `<Tabs className="mb-4" tabs={['Inicia Sesión', 'Crear cuenta']} onChange={setActualTab} />`
 *
 * **Parameters**
 *
 * - **className**: additional css class
 * - **tabs**: array strings with name of tabs
 * - **onChange**: function that returns actual number tab active
 * @param {{className, tabs, onChange}} props Component paramenters
 */
const Tabs = ({ className, tabs = [], onChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  // useEffect(() => {
  //   onChange(activeTab);
  // },[activeTab, onChange]);

  return (
    <div className={`block ${className}`}>
      <div className="flex flex-row justify-around">
        {tabs.map((value, index) => {
          return (
            <div onClick={() => setActiveTab(index)} className={`py-2 px-4 w-full flex justify-center items-center cursor-pointer ${index === activeTab ? 'text-white' : 'text-background03'}`}>{value}</div>
          )
        })}
      </div>
      <div className="Tabs__line rounded-full bg-background03 flex flex-row">
        {tabs.map((_, index) => {
          return (
            <div className={`transition-transform duration-500 ease-linear Tabs__line rounded-full w-full flex justify-center items-center ${index === activeTab ? 'bg-primary' : ''}`}></div>
          )
        })}
      </div>
    </div>
  )
}

export default Tabs;