import { NavLink } from 'react-router-dom'

import logo from '../images/logo.png'
import phone from '../images/phone.png'
import whatsapp from '../images/whatsapp.png'
import mail from '../images/mail.png'
import wechat from '../images/wechat.png'
import skype from '../images/skype.png'

function Footer() {
    return (
        <div id="footer">
            <div className="row">
                <div className="col-md">
                    <NavLink to="/">
                        <img src={logo} alt='logo' className='footer-logo'/>
                    </NavLink>
                </div>
                <div className="col-md">
                    <h3>Go to</h3>
                    <div className='footer-link'>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </div>
                    <div className='footer-link'>
                        <a href="/#how-it-works-landing">
                            Get Quote
                        </a>
                    </div>
                </div>
                <div className="col-md">
                    <h3>Services</h3>
                    <div className='footer-link'>
                        <NavLink to="/service-shipping">
                            Shipping
                        </NavLink>
                    </div>
                    <div className='footer-link'>
                        <NavLink to="/service-warehouse">
                            Warehouse and FullFillment
                        </NavLink>
                    </div>
                    <div className='footer-link'>
                        <NavLink to="/service-business">
                            Business Solutions
                        </NavLink>
                    </div>
                </div>
                
                <div className="contacts">
                    <h3>Contacts</h3>
                    <div className='row no-gutters'>
                        <img src={phone} className='contact-img'/>
                        <p className='contact-item'>86-21-52868600 ext 807</p>  
                    </div>
                    <div className='row no-gutters'>
                        <img src={mail} className='contact-img'/>
                        <p className='contact-item'>benjamin@evertowin.com</p>  
                    </div>
                    <div className='row no-gutters'>
                        <img src={whatsapp} className='contact-img'/>
                        <p className='contact-item'><strong>WhatsApp </strong>86-13918261314</p>  
                    </div>
                    <div className='row no-gutters'>
                        <img src={skype} className='contact-img'/>
                        <p className='contact-item'><strong>Skype </strong>benjamin.cjm</p>  
                    </div>
                    <div className='row no-gutters'>
                        <img src={wechat} className='contact-img'/>
                        <p className='contact-item'><strong>WeChat </strong>jiaming_1230</p>  
                    </div>
                </div>
            </div>
            <div id='address-footer'>
                <p>
                    Address: Regent Sunshine Building - Rm 12A10, No. 19 Wu Ning
                    Road, Shanghai, 200042, China
                </p>
            </div>
        </div>
    )
}

export default Footer
