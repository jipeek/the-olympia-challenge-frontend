import React, { useState }  from 'react';

import "./styles.css";

import CustomButton from '../../globalComponents/CustomButton';

import {HOME_SCREEN as HOME_SCREEN_es} from '../../locales/es';

import img from "../../static/61mAKoAsBDL 1.svg";
import shoppingBag from "../../static/icons/ShoppingBag.svg";
import dotone from "../../static/icons/Duotone.svg";
import couponDiscount from "../../static/icons/CouponDiscount.svg";
import CardProductVertical from '../../globalComponents/CardProductVertical/CardProductVertical';
import { CardProductSquare } from '../../globalComponents/CardProductSquare/CardProductSquare';
import { CardProductFavoriteSmall } from '../../globalComponents/CardProductFavoriteSmall/CardProductFavoriteSmall';
import { ProductBanner } from '../../globalComponents/ProductBanner/ProductBanner';
import InputSearch from '../../globalComponents/InputSearch/InputSearch';

// imports de ProductSummary, esto no va en HomeScreen. Solo está puesto temporalmente
import img1 from "../../static/hdbeufb.svg";
import ProductSummary from '../../globalComponents/ProductSummary/ProductSummary';

// Opciones de método de pago
import TypeCards from '../../globalComponents/TypeCards/TypeCards';
import Visa from "../../static/cards/Visa.svg";
import Mastercard from "../../static/cards/Mastercard.svg";
import Amex from "../../static/cards/AmericaExpress.svg";
import Pse from "../../static/cards/Pse.svg";
import Efecty from "../../static/cards/Efecty.svg";

import RadioSelect from '../../globalComponents/RadioSelect/RadioSelect';

import VariationLink from '../../globalComponents/VariationLink/VariationLink';

import NavMenu from '../../globalComponents/NavMenu/NavMenu';

import { Link, useHistory } from 'react-router-dom';
import { GetProducts } from '../../api/service';


const HomeScreen= () =>{
    const strings = HOME_SCREEN_es;
    const { buttonSearchPlaceholder, buttonTitle01, buttonTitle02 } = strings;
    const [products, setProducts] = useState();
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();

    const handleNextPageSearch = () => {
        history.push('/search');
    }
    const getAllProducts = async () =>{
        let data = await GetProducts()
            setProducts(data)
            setLoaded(!loaded);
    }

    if(!loaded){
        getAllProducts()
    }

    let data = products.results;
    console.log(data, 'data');
    const verticalProduct = data?.map((qData)=>  (
        <CardProductVertical className="mr-3" img={img} title={qData.name_en} price={qData.price} footer="Envío gratis" />      
     ) );

    const cardProductSquare = data?.map((qData)=>  (
        <CardProductSquare className="mr-4" img={img} price={qData.price} />     
     ) );

    return (
        <>
           <div className="pb-20">
                <NavMenu activeView={'active'}/>
                <div className="container mx-auto px-4">
                    <div className="flex flex-row items-center justify-between w-full mb-4 relative h-15 rounded mb-6">
                        <InputSearch placeholder={buttonSearchPlaceholder} />
                        <Link to="/cart" className="py-4 pl-4">
                            <img src={shoppingBag} alt="Shopping Bag" />
                        </Link>

                </div>

                <div className="h-40 w-full rounded-xl bg-gradient01 mb-6">
                </div>
                <div className="mb-6 flex overflow-auto">
                    <div>
                        <CustomButton className="mr-6" icon={dotone} title={buttonTitle01} />
                    </div>
                    <div>
                        <CustomButton className="mr-6" icon={couponDiscount} title={buttonTitle02} />

                    </div>
                    <div className="h-40 w-full rounded-xl bg-gradient01 mb-6">
                    </div>
                    <div className="mb-6 flex overflow-auto">
                        <div>
                            <CustomButton className="mr-6" icon={dotone} title={buttonTitle01} />
                        </div>
                        <div>
                            <CustomButton className="mr-6" icon={couponDiscount} title={buttonTitle02} />
                        </div>
                        <div>
                            <CustomButton className="mr-6" icon={dotone} title={buttonTitle01} />
                        </div>
                        <div>
                            <CustomButton className="mr-6" icon={couponDiscount} title={buttonTitle02} />
                        </div>
                    </div>

                    
                </div>


                <div className="section-products-vertical">
                    <div className="mb-4 items-center px-4">
                        <span className="text-white text-lg font-bold font-heading">Últimos productos</span>
                    </div>
                    <div className="flex overflow-auto mb-11 pl-4">
                        {verticalProduct}
                        {/* //eliminar mocks */}
                        <CardProductVertical className="mr-3" img={img} title="Protector de piel para escritorio" price="$49.900" footer="Envío gratis" />
                        <CardProductVertical className="mr-3" img={img} title="Protector de piel para escritorio" price="$49.900" footer="Envío gratis" />
                        <CardProductVertical className="mr-3" img={img} title="Protector de piel para escritorio" price="$49.900" footer="Envío gratis" />
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="mb-4 flex justify-between items-center">
                        <span className="text-white text-lg font-bold font-heading">Más votado</span>
                        <a href="/" className="text-primary text-xs">Ver más</a>
                    </div>
                    <CardProductFavoriteSmall imgProfile="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" img="https://images.unsplash.com/photo-1588200908342-23b585c03e26" className="mb-6" />
                </div>

                <div className="section-products w-full bg-background02 py-4 relative">
                    <p className="text-white mb-3.5 pl-4 font-heading">Productos en este post</p>
                    <div className="flex overflow-auto pl-4">
                    {cardProductSquare}
                         {/* //eliminar mocks */}
                        <CardProductSquare className="mr-4" img={img} price="$19.900" />
                        <CardProductSquare className="mr-4" img={img} price="$19.900" />
                        <CardProductSquare className="mr-4" img={img} price="$19.900" />
                        <CardProductSquare className="mr-4" img={img} price="$19.900" />
                        <CardProductSquare className="mr-4" img={img} price="$19.900" />
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="mb-4 items-center">
                        <span className="text-white text-lg font-bold font-heading">Destacados</span>
                    </div>
                    <ProductBanner price="35% OFF" description="Colección Home Office" className="bg-gradient07 mb-6" />
                    <div className="section-outstanding grid grid-cols-2 gap-5">
                        <CardProductVertical img={img} title="Protector de piel para escritorio" price="$49.900" footer="Envío gratis" />
                        <CardProductVertical img={img} title="Protector de piel para escritorio" price="$49.900" footer="Envío gratis" />
                        <CardProductVertical img={img} title="Protector de piel para escritorio" price="$49.900" footer="Envío gratis" />
                        <CardProductVertical img={img} title="Protector de piel para escritorio" price="$49.900" footer="Envío gratis" />
                    </div>
                </div>

                <div className="container mx-auto px-4">

                <div className="OrderByModal relative bg-background02 rounded-double pt-10 px-5 pb-5 my-4">
                    <div className="Global-line"></div>
                    <div className="OrderByModal__content flex flex-col">
                        <span className="text-white text-medium font-bold pb-1">Nombre variaciones</span>
                        <VariationLink url="#" text="Peso Colombiano"  />
                        <VariationLink url="#" text="Peso Méxicano" /> 
                        <VariationLink url="#" text="Dolar Americano"  />
                    </div>
                </div>

                <div className="OrderByModal relative bg-background02 rounded-double pt-10 px-5 pb-5 my-4">
                    <div className="Global-line"></div>
                    <div className="OrderByModal__content">
                        <span className="text-white text-medium font-bold">Ordenar por</span>
                        <RadioSelect text="Peso Colombiano"  />
                        <RadioSelect text="Peso Méxicano" checked="checked"  /> 
                        <RadioSelect text="Dolar Americano"  />
                    </div>
                </div>

                <div className="flex flex-row justify-around ">
                    <TypeCards img={Visa} />
                    <TypeCards img={Mastercard} />
                    <TypeCards img={Amex} />
                    <TypeCards img={Pse} />
                    <TypeCards img={Efecty} />
                </div>

                    <div className="rounded-costum bg-background02 pt-4 pl-4 pr-2.5 pb-2.5">
                        <span className="text-base text-white mb-4.5">Resumen de productos</span>
                        <ProductSummary img={img1} alt="hola" title="Protector de piel para escritorio" und="1 unidad" price="$49.900"  />
                        <ProductSummary img={img1} alt="hola" title="Protector de piel para escritorio" und="1 unidad" price="$49.900"  />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeScreen;