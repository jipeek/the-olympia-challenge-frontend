import React, {useState} from 'react';
import { GetCategories } from '../../api/service';
//import { CardProductSquare } from '../../globalComponents/CardProductSquare/CardProductSquare';
import BoxCategory from '../../globalComponents/BoxCategory/BoxCategory';
import MiniBoxCategory from '../../globalComponents/MiniBoxCategory/MiniBoxCategory';
import LinkWithArrow from '../../globalComponents/LinkWithArrow/LinkWithArrow';
import HeaderNav from '../../globalComponents/HeaderNav/HeaderNav';
import NavMenu from '../../globalComponents/NavMenu/NavMenu';
import { Link } from 'react-router-dom';

// Icons & Imgs
import Computer from "../../static/categories/Computer.svg";
import Snacks from "../../static/categories/Snacks.svg";
import Laptop from "../../static/categories/Laptop.svg";
import Utilities from "../../static/categories/Utilities.svg";
import Plant from "../../static/categories/Plant.svg";
import Packs from "../../static/categories/Packs.svg";
import Led from "../../static/categories/Led.svg";

const Categories = () =>{
    const [products, setProducts] = useState();
    const [loaded, setLoaded] = useState(false);

    const getAllProducts = async () =>{
        let data = await GetCategories()
            setProducts(data)
            setLoaded(!loaded);
    }

    if(!loaded){
        getAllProducts()
    }

    let data = products?.results;
    const categories = data?.map((qData)=>  (
        <a href={'/'}><BoxCategory margin="mb-5" className="bg-colorful04" img={qData.picture ? qData.picture : Snacks   } nameCategory={qData.name_es} QuantityProducts={qData.products_count} /></a>
     ) );

     const categoriesMinBox = data?.map((qData)=>  (
        <a href={'/'}><MiniBoxCategory className="bg-colorful02" img={qData.picture ? qData.picture : Plant } nameCategory={qData.name_es} /></a>
     ) );

     const link = data?.map((qData)=>  (
        <LinkWithArrow url={'/'} text={qData.name_es} />
     ) );

    return (
        <>
            <div className="pb-20">
                <NavMenu activeView={'active'}/>
                <div className="container mx-auto px-4 mt-4 mb-6">
                    <HeaderNav text={'Categorías'} />
                    <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
                    </ul>
                       <div className="mt-9">
                          <div className="flex justify-between flex-wrap">
                              {categories}
                             </div>
                          <div className="flex mt-6 justify-between flex-nowrap">
                              {categoriesMinBox}
                             </div>
                          <div className="mt-9">
                              <span className="font-title text-2xl font-bold text-white">Otras categorías</span>
                              <div className="flex flex-col mt-5 rounded bg-background02">
                                {link }
                              </div>
                          </div>
                      </div>
                </div>
            </div>  
        </>
    )
}

export default Categories;