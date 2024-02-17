import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.css';
import navlogo from '../../Assets/navlogo.png';

function Last() {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
            <div className="footer-content  p-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html"><img src={navlogo} className="img-fluid" alt="logo"/></a>
                            </div>
                            <div className="footer-text">
                                <p>At DVELOPER BLOGS , we're dedicated to fostering a supportive environment where you can grow your skills, 
                                    share your knowledge, and collaborate on exciting projects. Join us and be part of something extraordinary.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="https://www.facebook.com/profile.php?id=100073583181417&sfnsn=wiwspwa&mibextid=RUbZ1f"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="https://youtu.be/dQw4w9WgXcQ?si=bosXv8npbQtzfSQb"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="https://www.instagram.com/knishu_hebbar30?igsh=amxndmJnZWpubW5h"><i className="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul classNameName='lister'>
                                <li><a href="/Home">Home</a></li>
                                <li><a href="https://github.com/BhaveshDwaram">portfolio</a></li>
                                <li><a href="https://mail.google.com/">Contact</a></li>
                                <li><a href="/About us">About us</a></li>
                                <li><a href="/read">Our Services</a></li>
                                <li><a href="https://chat.openai.com/">Expert Team</a></li>
                                <li><a href="https://mail.google.com/">Contact us</a></li>
                                <li><a href="https://hashnode.com/">Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2024, All Right Reserved <a href="/">Dev-blogs</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul classNameName='lister'>
                                <li><a href="/Home">Home</a></li>
                                <li><a href="https://policies.google.com/terms?hl=en-US">Terms</a></li>
                                <li><a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpenyields.wordpress.com%2Ftag%2Fno-privacy%2F&psig=AOvVaw3qP2HnNkz8q7FoRvivULsx&ust=1708269187180000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLi1ouPUsoQDFQAAAAAdAAAAABAE">Privacy</a></li>
                                <li><a href="https://licindia.in/policy-status">Policy</a></li>
                                <li><a href="https://mail.google.com/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  );
}

export default Last;
