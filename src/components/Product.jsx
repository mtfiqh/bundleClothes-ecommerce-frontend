import React, {Component} from 'react';
import './css/styles.css';

export default class Product extends Component {

    render(){
        return(
            <div className="container" align="center">
                <div className="row">
                    <div className="col-sm-3 col-6 hoverable">
                        <div className="product-wrapper">
                         <div className="img-thumb"> 
                             <img src="https://cdn.shopify.com/s/files/1/1042/7446/products/4000x4000-Lite-322-Black_4f8e48f7-f85b-4365-b85c-b7f47851d72d_800x.jpg?v=1588227116" alt=""/>
                                <p className="price">Rp. 99.000</p>
                        </div>
                                <p className="title-product">title here</p>
                                <p className="desc">describe</p>
                        <div className="rating"> 
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        </div> 
                         </div>
                    </div>

                    <div className="col-md-3 col-6 hoverable">
                        <div className="product-wrapper">
                         <div className="img-thumb"> 
                             <img src="https://cdn.shopify.com/s/files/1/1042/7446/products/4000x4000-Lite-322-Black_4f8e48f7-f85b-4365-b85c-b7f47851d72d_800x.jpg?v=1588227116" alt=""/>
                                <p className="price">Rp. 99.000</p>
                        </div>
                                <p className="title-product">title here</p>
                                <p className="desc">describe</p>
                        <div className="rating"> 
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        </div> 
                         </div>
                    </div>
                    <div className="col-md-3 col-6 hoverable">
                    <div className="product-wrapper hoverable">
                         <div className="img-thumb"> 
                             <img src="https://cdn.shopify.com/s/files/1/1042/7446/products/4000x4000-Lite-322-Black_4f8e48f7-f85b-4365-b85c-b7f47851d72d_800x.jpg?v=1588227116" alt=""/>
                                <p className="price">Rp. 99.000</p>
                        </div>
                                <p className="title-product">title here</p>
                                <p className="desc">describe</p>
                        <div className="rating"> 
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        </div> 
                         </div>
                    </div>
                    <div className="col-md-3 col-6 hoverable">
                    <div className="product-wrapper">
                         <div className="img-thumb"> 
                             <img src="https://cdn.shopify.com/s/files/1/1042/7446/products/4000x4000-Lite-322-Black_4f8e48f7-f85b-4365-b85c-b7f47851d72d_800x.jpg?v=1588227116" alt=""/>
                                <p className="price">Rp. 99.000</p>
                        </div>
                                <p className="title-product">title here</p>
                                <p className="desc">describe</p>
                        <div className="rating"> 
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        </div> 
                         </div>
                    </div>
                    
                  
                </div>
            </div>
        );
    }

}