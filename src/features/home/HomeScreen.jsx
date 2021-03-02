import React  from 'react';

import "./styles.css";

import CustomButton from '../../globalComponents/CustomButton';

import {HOME_SCREEN as HOME_SCREEN_es} from '../../locales/es';

const HomeScreen= () =>{
    const strings = HOME_SCREEN_es;
    const { buttonSearchPlaceholder, buttonTitle01, buttonTitle02 } = strings;

    return (
        <div className="container mx-auto px-4">
            <form action="" class="mt-6">
                <div class="flex flex-wrap items-stretch w-full mb-4 relative h-15 items-center rounded mb-6">
                    <div class="relative text-gray-600 focus-within:text-gray-400 w-full">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                                <svg fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                        </span>
                        <input type="search" name="q" class="py-2 text-white rounded-md pl-10 focus:bg-background02 bg-background02 w-full border-background02 h-12" placeholder={buttonSearchPlaceholder} autocomplete="off" />
                    </div>
                </div>
            </form>
            <div className="h-40 w-full rounded-xl bg-gradient-to-r from-colorful06 via-colorful01 to-colorful07 mb-6">

            </div>
            <div className="flex mb-6">
                <div className="mr-6">
                    <CustomButton title={buttonTitle01} />
                </div>
                <div className="mr-6">
                    <CustomButton title={buttonTitle02} />
                </div>
            </div>

            <h2 className="text-white mb-6 text-sm">Últimos productos</h2>
            <div className="flex">
                <div className="h-52 w-40 rounded-xl bg-background02 mb-6 mr-6" />
                <div className="h-52 w-40 rounded-xl bg-background02 mb-6 mr-6" />
            </div>

            <h2 className="text-white mb-6 text-sm">Más votado</h2>
            <div className="h-52 w-full rounded-xl bg-background02 mb-6" />
        </div>
    )
}

export default HomeScreen;