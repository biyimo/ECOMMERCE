import React, { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import watch from '../'
import Color from '../components/Color';
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

const SingleProduct = () => {   
    const props = {width: 400, height: 500, zoomwidth: 600, img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww"};
    const [orderedProduct, setOrderedProduct] = useState(true)
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      };
  return (
    <div>
        <Meta title={'Product Name'}/>
        <BreadCrumb title='Product Name'/>
        <div className="main-product-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                           <div>
                                <ReactImageZoom {...props} />
                            </div> 
                        </div>
                        <div className="other-product-images d-flex flex-wrap gap-15">
                            <div><img src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww" className='img-fluid' alt="" /></div>
                            <div><img src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww" className='img-fluid' alt="" /></div>
                            <div><img src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww" className='img-fluid' alt="" /></div>
                            <div><img src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww" className='img-fluid' alt="" /></div>
                        </div>
                    </div>
                    <div className="col-6">  
                        <div className="main-product-details">
                            <div className='border-bottom'>
                                <h3 className='title'>
                                    PlayStation 5 (2021 Edition) with a free controller 
                                </h3>
                            </div>
                              <div className="border-bottom py-3">
                                <p className="price">
                                  $ 100
                                </p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0 t-review'>{ "2 Reviews" }</p>
                                </div>
                                <a className='review-btn' href="#review">Write a Review</a>
                              </div>
                              <div className="py-3">
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Type : </h3> 
                                    <p className='product-data'>Console</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Brand : </h3> 
                                    <p className='product-data'>Sony</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Category : </h3> 
                                    <p className='product-data'>PlayStation 5</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Tags : </h3> 
                                    <p className='product-data'>PS5</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Availability : </h3> 
                                    <p className='product-data'>In Stock</p>
                                </div>
                                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                    <h3 className='product-heading'>Size : </h3> 
                                    <div className="d-flex flex-wrap gap-15">
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                    <h3 className='product-heading'>Color : </h3> 
                                    <Color/>
                                </div>
                                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                                    <h3 className='product-heading'>Quantity : </h3> 
                                    <div className="">
                                        <input type="number" name='' min={1} max={10} className='form-control' style={{width : "70px"}} id='' />
                                    </div>
                                    <div className="d-flex align-items-center gap-30 ms-5
                                    ">
                                        <button className='button border-0' type='submit'>Add to Cart</button>
                                        <button className='button signup'>Buy it Now</button>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a href="">
                                            <TbGitCompare className='fs-5 m3-2'/>
                                            Add to Compare
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <AiOutlineHeart className='fs-5 m3-2'/>
                                            Add to Wishlist
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-3">
                                    <h3 className='product-heading'>Shipping & Retuns: </h3> 
                                    <p className='product-data'>
                                        Free shipping and returns available on all orders! <br /> We ship 
                                        all world wide products ordered from us within <b>5-10 business days</b> 
                                    </p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-3">
                                    <h3 className='product-heading'>Product Link:</h3> 
                                    <a 
                                        href="javascript:void(0);" 
                                        onClick={()=>{
                                        copyToClipboard(
                                            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww"
                                        );
                                        }}> Copy Product Link</a>
                                </div>
                              </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div className="description-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        
                        <div className='bg-white p-3'>
                            <h4>Description</h4>
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
                        <h3 id='review' >Reviews</h3>
                        <div className="review-inner-wrapper">
                        <div className="review-head d-flex justify-content-between align-items-end">
                            <div>
                                <h4  className='mb-2'>Customer Reviews</h4>
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