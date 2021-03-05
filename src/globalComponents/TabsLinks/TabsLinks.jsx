import React, { useEffect, useState } from 'react';
import './styles.css';
/**
 * Tabs Component
 *
 * **Example**
 *
 * ```
 * <TabsLinks className="mb-9" tabs={[
 *   {
 *     name: 'Inicia Sesión',
 *     link: '/login'
 *   },
 *   {
 *     name: 'Crear cuenta',
 *     link: '/signup'
 *   }
 * ]}
 *   defaultTab={1}
 * />
 * ```
 *
 * **Parameters**
 *
 * - **className**: additional css class
 * - **tabs**: array strings with name of tabs
 * - **onChange**: function that returns actual number tab active
 * - **defaultTab** [number]: set default tab active
 * @param {{className, tabs, onChange}} props Component paramenters
 */
const TabsLinks = ({ className, tabs = [], onChange = () => { }, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab])

  useEffect(() => {
    onChange(activeTab);
  }, [activeTab, onChange]);

  return (
    <div className={`block ${className}`}>
      <div className="flex flex-row justify-around">
        {tabs.map((tab, index) => {
          return (
            <a key={index} href={tab.link} onClick={() => setActiveTab(index)} className={`py-2 px-4 w-full flex justify-center items-center cursor-pointer ${index === activeTab ? 'text-white' : 'text-background03'}`}>{tab.name}</a>
          )
        })}
      </div>
      <div className="Tabs__line rounded-full bg-background03 flex flex-row">
        {tabs.map((_, index) => {
          return (
            <div key={index} className={`transition-transform duration-500 ease-linear Tabs__line rounded-full w-full flex justify-center items-center ${index === activeTab ? 'bg-primary' : ''}`}></div>
          )
        })}
      </div>
    </div>
  )
}

export default TabsLinks;