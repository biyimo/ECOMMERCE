import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import {BiPhoneCall, BiInfoCircle} from 'react-icons/bi'

const Contact = () => {
  return (
    <div>
      <Meta title={'Contact Us'} />
      <BreadCrumb title='Contact Us'/>
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24058.612095320186!2d3.3692460685232546!3d6.567840675817713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92cd12b89285%3A0xee670a134865fbed!2sKosofe%20105102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1699898160593!5m2!1sen!2sng" 
              width="600" 
              height="450" 
              className='border-0 w-100' 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between ">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className='d-flex flex-column gap-15'>
                      <div>
                          <input type="text" className="form-control" placeholder='Name' />
                      </div>
                      <div>
                          <input type="email" className="form-control"  placeholder='Email'/>
                      </div>
                      <div>
                          <input type="tel" className="form-control" placeholder='Mobile Number'/>
                      </div>
                      <div>
                          <textarea name="" id="" className='w-100 form-control' cols="30" rows="4" placeholder='Comments'></textarea>
                      </div>
                      <div>
                        <button className='button border-0'>Submit</button>
                      </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us </h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 aligm-items-center'>
                        <AiOutlineHome/>
                        <address className='mb-0'>
                          Hno: 227 Lorem, ipsum dolor, consectetur, adipisicing.
                        </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 aligm-items-center'>
                        <BiPhoneCall />
                        <a href="tel: +234 70 862 6102">tel: +234 70 862 6102</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 aligm-items-center'>
                        <AiOutlineMail />
                        <a href="akinbiyimoses@gmail.com">akinbiyimoses@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 aligm-items-center'>
                        <BiInfoCircle/>
                        <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact