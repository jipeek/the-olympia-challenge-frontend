import React, {useState} from 'react';
import { GetCategories } from '../../api/service';
import { CardProductSquare } from '../../globalComponents/CardProductSquare/CardProductSquare';

const Categories = () =>{
    const [questionData, setQuestionData] = useState([]);
    const [loaded, setLoaded] = useState(false);
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

    
    const getCategoriasData = async  () => {
        let result = await GetCategories();
        setQuestionData(result.results);
        setLoaded(!loaded);
    };

    if(!loaded){
        getCategoriasData();
    }

// console.log(questionData, 'question');
//     const faq = [questionData].map((qData)=> qData ? (
//         console.log(qData, 'qData')
        
//     ) : (console.log("no data")));
    
    return (
        <div>
            <h1>Categorías</h1>
           <CardProductSquare questionData={questionData}/>
           {/* {faq} */}
        </div>
    )
}

export default Categories;