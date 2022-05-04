import "./profile.css";
import pic from "../../../images/logo192.png" 
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaFacebookF} from "react-icons/fa";
import {BsInstagram,BsTwitter} from "react-icons/bs";
import {SiAtom} from "react-icons/si"
const profile=()=>{
    return( 
        <div className="container">
        <div className="row">
             
            <div className="col-md-5">
                <div className="row">
                    <div className="col-12 bg-white p-0 px-3 py-3 mb-3">
                        <div className="d-flex flex-column align-items-center">
                        <img height="75%" src={pic} alt=""></img>

                            <p className="fw-bold h4 mt-3">John Doe</p>
                            <p className="text-muted">Full Stack Developer</p>
                            <p className="text-muted mb-3">Soma,San Francisco, CA</p>
                            <div className="d-flex ">
                                <div className="btn btn-primary follow me-2">Follow</div>
                                <div className="btn btn-outline-primary message">Message</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 bg-white p-0 px-2 pb-3 mb-3">
                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                            <p><SiAtom className="browser"/>Website</p>
                            <p>https://bootdey.com</p>
                        </div>
                        
                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                            <p><BsTwitter className="twitter" />Twitter</p>
                            <p>@bootdey</p>
                        </div>
                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                            <p> <BsInstagram className="insta"/>Instagram</p>
                            
                            <p>bootdey</p>
                        </div>
                        <div className="d-flex justify-content-between py-2 px-3">
                            <p><FaFacebookF className="fb" />facebook</p>
                          <p>bootdey</p>  
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-7 ps-md-4">
                <div className="row">
                    <div className="col-12 bg-white px-3 mb-3 pb-3">
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <p className="py-2">Full Name</p>
                            <p className="py-2 text-muted">Kenneth valdez</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <p className="py-2">Email</p>
                            <p className="py-2 text-muted">fip@jukmuh.al</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <p className="py-2">Phone</p>
                            <p className="py-2 text-muted">(239) 816-9029</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <p className="py-2">Mobile</p>
                            <p className="py-2 text-muted">(320) 380-4539</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <p className="py-2">Address</p>
                            <p className="py-2 text-muted"> Soma,San Francisco,CA</p>
                        </div>
                    </div>
                    <div className="col-12 bg-white px-3 pb-2">
                        <h6 className="d-flex align-items-center mb-3 fw-bold py-3"><i
                                className="text-info me-2">assignment</i>Project
                            Status</h6>
                        <small>Web Design</small>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-primary" role="progressbar" style={{"width": "5cm"}}
                                aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>One Page</small>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-primary" role="progressbar" style={{"width": "10cm"}}
                                aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Mobile Template</small>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-primary" role="progressbar" style={{"width": "3cm"}}
                                aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Backend API</small>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-primary dododo" role="progressbar" style={{"width": "15cm"}}
                                aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Website Markup</small>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-primary" role="progressbar"  style={{"width": "13cm"}}
                                aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default profile;