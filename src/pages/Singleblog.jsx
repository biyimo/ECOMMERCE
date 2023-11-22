import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from "react-icons/hi";

const Singleblog = () => {
  return (
    <div>
        <Meta title={'Dynamic Blog Name'}/>
        <BreadCrumb title='Dynamic Blog Name'/>

        <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        
                        <div className="col-12">
                            <div className="signal-blog-card">
                                <Link to='/blogs' className='d-flex align-items-center gap-10'>
                                    <HiOutlineArrowLeft className='fs-4'/>
                                    Go back to blog
                                </Link>
                                <h3 className="title"> 
                                    A Beautiful Sunday Morining Renaissance
                                </h3>
                                <img src="/images/blog-1.jpg" className='img-fluid w-100 my-4' alt="blog" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Illo hic aut, temporibus cum natus commodi, 
                                    eaque sapiente consequatur odio impedit dignissimos molestias! 
                                    Atque porro doloremque sunt ipsa, culpa, inventore voluptatibus 
                                    placeat ab adipisci impedit quis mollitia possimus qui perspiciatis velit nisi rem rerum. 
                                    Magni velit doloremque labore obcaecati perferendis reprehenderit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Singleblog