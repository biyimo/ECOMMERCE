import React, { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";

const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(true)
  return (
    <div>
        <Meta title={'Product Name'}/>
        <BreadCrumb title='Product Name'/>
        <div className="main-product-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                           <div></div> 
                        </div>
                    </div>
                    <div className="col-6"></div>
                </div>
            </div>
        </div>
        <div className="description-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h4>Description</h4>
                        <div className='bg-white p-3'>
                        
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Odio tenetur recusandae dolores mollitia voluptates 
                            nulla aspernatur laboriosam laborum magnam dolore, 
                            enim sequi ut quae natus deserunt quibusdam totam dicta. 
                            Accusamus?
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="reviews-wrapper home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3>Reviews</h3>
                        <div className="review-inner-wrapper">
                        <div className="review-head d-flex justify-content-between align-items-end">
                            <div>
                                <h4 className='mb-2'>Customer Review</h4>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0'>Based on 2 Reviews</p>
                                </div>
                            </div>
                            {
                                orderedProduct&&(
                                    <div>
                                    <a className="text-dark text-decoration-underline" href="">
                                        Write a Review
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className="review-form py-4">
                            <h4>Write a Review</h4>
                            <form action="" className='d-flex flex-column gap-15'>
                                <div>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={true}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                
                                <div>
                                    <textarea name="" id="" className='w-100 form-control' cols="30" rows="4" placeholder='Comments'></textarea>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button className='button border-0'>Submit Review</button>
                                </div>
                            </form>
                        </div>
                        <div className="reviews mt-4">
                            <div className="review">
                            <div className="d-flex gap-10 align-items-center">
                                <h6 className='mb-0'>Navdeep</h6>
                                <ReactStars
                                count={5}
                                size={24}
                                value={4}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            </div>
                            <p className='mt-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Exercitationem natus accusantium quidem, 
                                odit quia eius doloremque! Lorem ipsum dolor sit amet, 
                                consectetur adipisicing elit. Quia, repellat.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="popular-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                <div className="col12">
                    <h1 className="section-heading">Our Popular Products</h1>
                </div>
                </div>
                <div className='row'>
                <div className='col--2'>
                    <div className='card'></div>
                </div>
                <div className='col--2'>
                    <div className='card'></div>
                </div>
                    <ProductCard/> 
                </div>
            </div>
        </section>
    </div>
  )
}

export default SingleProduct