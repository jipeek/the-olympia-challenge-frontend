import React  from 'react';

import "./styles.css";

import CustomButton from '../../globalComponents/CustomButton';

import {HOME_SCREEN as HOME_SCREEN_es} from '../../locales/es';

import img from "../../static/61mAKoAsBDL 1.svg";
import search from "../../static/icons/Search.svg";
import shoppingBag from "../../static/icons/ShoppingBag.svg";
import dotone from "../../static/icons/Duotone.svg";
import couponDiscount from "../../static/icons/CouponDiscount.svg";
import { CardProductVertical } from '../../globalComponents/CardProductVertical/CardProductVertical';
import { CardProductSquare } from '../../globalComponents/CardProductSquare/CardProductSquare';
import { CardProductFavoriteSmall } from '../../globalComponents/CardProductFavoriteSmall/CardProductFavoriteSmall';
import { ProductBanner } from '../../globalComponents/ProductBanner/ProductBanner';


import CardProductHorizontal from '../../globalComponents/CardProductHorizontal/CardProductHorizontal';


const HomeScreen= () =>{
    const strings = HOME_SCREEN_es;
    const { buttonSearchPlaceholder, buttonTitle01, buttonTitle02 } = strings;

    return (
        <>
        <div className="container mx-auto px-4">
                <form action="" className="mt-6">
                    <div className="flex flex-row items-center justify-between w-full mb-4 relative h-15 rounded mb-6">
                        <div className="relative text-gray-600 focus-within:text-gray-400 w-full">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                    <img src={search} alt="search icon" />
                            </button>
                        </span>
                            <input type="search" name="q" className="py-2 text-white rounded-xl pl-10 focus:bg-background02 bg-background02 w-full border-background02 h-12" placeholder={buttonSearchPlaceholder} />
                    </div>
                        <a href="/" className="py-4 pl-4">
                            <img src={shoppingBag} alt="Shopping Bag" />
                        </a>
                </div>
            </form>
                <div className="h-40 w-full rounded-xl bg-gradient01 mb-6">
            </div>
            <CardProductHorizontal img={img} alt="Texto alternativo" title="Protector de piel para escritorio" price="$49.900" footer="Envío gratis" />
                <div className="mb-6 flex overflow-auto">
                    <div className="mr-6">
                        <CustomButton icon={dotone} title={buttonTitle01} />
                    </div>
                    <div className="mr-6">
                        <CustomButton icon={couponDiscount} title={buttonTitle02} />
                    </div>
                    <div className="mr-6">
                        <CustomButton icon={dotone} title={buttonTitle01} />
                    </div>
                    <div className="mr-6">
                        <CustomButton icon={couponDiscount} title={buttonTitle02} />
                    </div>
                </div>

                <div className="mb-4 items-center">
                    <span className="text-white text-lg font-bold">Últimos productos</span>
                </div>
                <div className="flex overflow-auto mb-11">
                    <CardProductVertical img={img} title="Protector de piel para escritorio" price="$49.900" footer="Envío gratis" />
                    <CardProductVertical img={img} title="Protector de piel para escritorio" price="$49.900" footer="Envío gratis" />
                    <CardProductVertical img={img} title="Protector de piel para escritorio" price="$49.900" footer="Envío gratis" />
                </div>

                <div className="mb-4 flex justify-between items-center">
                    <span className="text-white text-lg font-bold">Más votado</span>
                    <a href="/" className="text-primary text-xs">Ver más</a>
                </div>
                <CardProductFavoriteSmall imgProfile="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" img="https://images.unsplash.com/photo-1588200908342-23b585c03e26" className="mb-6" />
            </div>
            <div className="section-products w-full bg-background02 py-4 relative">
                <p className="text-white mb-3.5 pl-4">Productos en este post</p>
                <div className="flex overflow-auto pl-4">
                    <CardProductSquare className="mr-4" img={img} price="$19.900" />
                    <CardProductSquare className="mr-4" img={img} price="$19.900" />
                    <CardProductSquare className="mr-4" img={img} price="$19.900" />
                    <CardProductSquare className="mr-4" img={img} price="$19.900" />
                    <CardProductSquare className="mr-4" img={img} price="$19.900" />
                </div>
            </div>
            <div className="container mx-auto px-4">
                <div className="mb-4 items-center">
                    <span className="text-white text-lg font-bold">Destacados</span>
                </div>
                <ProductBanner className="bg-gradient07 mb-6" />
                <div className="section-outstanding grid grid-cols-2 gap-5">
                    <CardProductVertical img={img} title="Protector de piel para escritorio" price="$49.900" footer="Envío gratis" />
                    <CardProductVertical img={img} title="Protector de piel para escritorio" price="$49.900" footer="Envío gratis" />
                    <CardProductVertical img={img} title="Protector de piel para escritorio" price="$49.900" footer="Envío gratis" />
                    <CardProductVertical img={img} title="Protector de piel para escritorio" price="$49.900" footer="Envío gratis" />
                </div>
            </div>
        </>
    )
}

export default HomeScreen;