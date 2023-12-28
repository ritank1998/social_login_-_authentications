import React from "react";
import "../App.css"
import "./login.css"
import google from "../images/google1.png"
import github from "../images/git.jpg"
import discord from "../images/discord1.png"
const Login=()=>{


    const googleLogIn=()=>{
         window.open("http://your_localHost/auth/google", "_self" )
    }
    const githubLogIn=()=>{
        window.open("http://Your_localHost/auth/github" , "_self")
    }

    const discordLogIn = ()=>{
        window.open("http://Your_LocalHost/auth/discord" , "_self")
    }

    return(
        <>
        
        <section className="py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mb-5">
              <h2 className="display-5 fw-bold text-center">Sign in</h2>
              <p className="text-center m-0">Don't have an account? <a href="#!">Sign up</a></p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="row gy-5 justify-content-center">
              <div className="col-12 col-lg-5">
                <form action="#!">
                  <div className="row gy-3 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input type="email" className="form-control border-0 border-bottom rounded-0" name="email" id="email" placeholder="name@example.com" required />
                        <label htmlFor="email" className="form-label">Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input type="password" className="form-control border-0 border-bottom rounded-0" name="password" id="password" value="" placeholder="Password" required />
                        <label htmlFor="password" className="form-label">Password</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row justify-content-between">
                        <div className="col-6">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me" />
                            <label className="form-check-label text-secondary" htmlFor="remember_me">
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="text-end">
                            <a href="#!" className="link-secondary text-decoration-none">Forgot password?</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-lg btn-dark rounded-0 fs-6" type="submit">Log in</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-12 col-lg-2 d-flex align-items-center justify-content-center gap-3 flex-lg-column">
                <div className="bg-dark h-100 d-none d-lg-block" style={{ width: '1px', '--bs-bg-opacity': 0.1 }}></div>
                <div className="bg-dark w-100 d-lg-none" style={{ height: '1px', '--bs-bg-opacity': 0.1 }}></div>
                <div>or</div>
                <div className="bg-dark h-100 d-none d-lg-block" style={{ width: '1px', '--bs-bg-opacity': 0.1 }}></div>
                <div className="bg-dark w-100 d-lg-none" style={{ height: '1px', '--bs-bg-opacity': 0.1 }}></div>
              </div>
              <div className="col-12 col-lg-5 d-flex align-items-center ">
                <div className="d-flex gap-3 flex-column w-100 ">
                  <a href="#!" className="btn bsb-btn-2xl btn-outline-dark rounded-0 d-flex align-items-center social" onClick={googleLogIn}>
                     <img src={google} className="social"></img>
                  </a>
                  <a href="#!" className="btn bsb-btn-2xl btn-outline-dark rounded-0 d-flex align-items-center social" onClick={githubLogIn}>
                    <img src={github} className="social"></img>
                  </a>
                  <a href="#!" className="btn bsb-btn-2xl btn-outline-dark rounded-0 d-flex align-items-center social" onClick={discordLogIn}>
                    <img src={discord} className="social"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



        </>
    )
}
export default Login