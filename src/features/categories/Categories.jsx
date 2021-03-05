import React from 'react';
//import { GetCategories } from '../../api/service';
//import { CardProductSquare } from '../../globalComponents/CardProductSquare/CardProductSquare';
import BoxCategory from '../../globalComponents/BoxCategory/BoxCategory';
import MiniBoxCategory from '../../globalComponents/MiniBoxCategory/MiniBoxCategory';
import LinkWithArrow from '../../globalComponents/LinkWithArrow/LinkWithArrow';
import HeaderNav from '../../globalComponents/HeaderNav/HeaderNav';
import NavMenu from '../../globalComponents/NavMenu/NavMenu';

// Icons & Imgs
import Computer from "../../static/categories/Computer.svg";
import Snacks from "../../static/categories/Snacks.svg";
import Laptop from "../../static/categories/Laptop.svg";
import Utilities from "../../static/categories/Utilities.svg";
import Plant from "../../static/categories/Plant.svg";
import Packs from "../../static/categories/Packs.svg";
import Led from "../../static/categories/Led.svg";

const Categories = () =>{
    //const [questionData, setQuestionData] = useState([]);
    //const [loaded, setLoaded] = useState(false);
    // const getCategoriesData = async  () => {
    //     GetCategories()
    //         .then((result) => {
    //             console.log(result, 'result');
    //             result.map((categories) => {
    //                 <p>{categories.name_en}</p>
    //             });
    //         })
    //         .catch((e) => {console.log(e, 'e')});
    // };
    // console.log(getCategoriesData, 'data');
    // getCategoriesData()

    
    // const getCategoriasData = async  () => {
    //     let result = await GetCategories();
    //     setQuestionData(result.results);
    //     setLoaded(!loaded);
    // };

    // if(!loaded){
    //     getCategoriasData();
    // }

// console.log(questionData, 'question');
//     const faq = [questionData].map((qData)=> qData ? (
//         console.log(qData, 'qData')
        
//     ) : (console.log("no data")));
    
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
                            <a href={'/'}><BoxCategory margin="mb-5" className="bg-colorful01" img={Computer} nameCategory={'Computadores'} QuantityProducts={'29 productos'} /></a>
                            <a href={'/'}><BoxCategory margin="mb-5" className="bg-colorful04" img={Snacks} nameCategory={'Snacks'} QuantityProducts={'29 productos'} /></a>
                            <a href={'/'}><BoxCategory className="bg-colorful07" img={Laptop} nameCategory={'Laptops'} QuantityProducts={'29 productos'} /></a>
                            <a href={'/'}><BoxCategory className="bg-colorful06" img={Utilities} nameCategory={'Insumos'} QuantityProducts={'29 productos'} /></a>
                        </div>
                        <div className="flex mt-6 justify-between flex-nowrap">
                            <a href={'/'}><MiniBoxCategory className="bg-colorful05" img={Plant} nameCategory={'Plantas'} /></a>
                            <a href={'/'}><MiniBoxCategory className="bg-colorful02" img={Packs} nameCategory={'Combos'} /></a>
                            <a href={'/'}><MiniBoxCategory className="bg-secondary" img={Led} nameCategory={'Luces'} /></a>
                        </div>
                        <div className="mt-9">
                            <span className="font-title text-2xl font-bold text-white">Otras categorías</span>
                            <div className="flex flex-col mt-5 rounded bg-background02">
                                <LinkWithArrow url={'/'} text={'Audífonos'} />
                                <LinkWithArrow url={'/'} text={'Monitor'} />
                                <LinkWithArrow url={'/'} text={'Audífonos'} />
                                <LinkWithArrow url={'/'} text={'Mousepad'} />
                                <LinkWithArrow url={'/'} text={'Monitor'} />
                                <LinkWithArrow url={'/'} text={'Audífonos'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories;