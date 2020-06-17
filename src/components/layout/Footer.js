import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div className="container positionabs">
        <footer className="row">
            <div className="sozial col-xs-12 col-sm-6 col-sm-push-6">
                <ul className="row">
                    <li className="col-xs-6 col-sm-2">
                    <Link to={'/'}>
                        <img className="logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-128.png" alt="facebook"/>
                    </Link>
                    </li>
                    <li className="col-xs-6 col-sm-2">
                    <Link to={'/'}>
                        <img className="logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-128.png" alt="twitter"/>
                    </Link>
                    </li>
                    <li className="col-xs-6 col-sm-2">
                    <Link to={'/'}>
                        <img className="logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-128.png" alt="instagram"/>
                    </Link>
                    </li>
                    <li className="col-xs-6 col-sm-2">
                    <Link to={'/'}>
                        <img className="logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_google_plus-128.png" alt="Google"/>
                    </Link>
                    </li>
                </ul>
                </div>
                
                <div className="copyright col-xs-12 col-sm-3 col-sm-pull-6">
                <p> &copy;ARITMÉTICA SIN FRONTERAS</p>
                </div>
                
                <div className="impressum col-xs-12 col-sm-3 col-sm-pull-6">
                <p>CONTACTANOS: </p>
                <p>aritsinfronteras@gmail.com</p>
                </div>
        </footer>
        </div>
     );
}
 
export default Footer;
