import React, { useState } from 'react';
import './Mobile2.css';
function Mobile2() {
    const [input, setInput] = useState(+955945012);
    const changeHandler = e => {
        setInput(e.target.value);

    }
    const [output, setOutput] = useState(0);
    const Handler = e => {
        setOutput(e.target.value);
    }
    return (
        <div className="smartphone1">
            <div className="content1">
                <h3 className="together">Create better together</h3>
                <p className="join">join our community</p>
                <form className="forms">
                    <div className="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button className="btn">Sign up</button>
                        <label className=" Rememberme">
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label>
                    </div>

                    <div className="container">
                        <span className="psw">Forgot <span className="pws">password</span></span>
                        <p className="styls">By creating a password agree our <span className=" styl">Terms and conditions</span></p>
                    </div>

                </form>
            </div>



            <div className="smartphone">
                <div className="content">

                    <div className="class">
                        <div className="margin">
                            <div><b className="style1">Enter your</b></div>
                            <div> <b className="style2">mobile number</b></div>
                            <p className="style3">we will send you conformation code</p>
                        </div>

                        <input type="numbers" className="id" name="input" value={input} onChange={changeHandler} />



                        <div>
                            <button className="btns" onClick={() => setInput(input + '1')}>1</button>
                            <button className="btns" onClick={() => setInput(input + '2')}>2</button>
                            <button className="btns" onClick={() => setInput(input + '3')}>3</button>


                        </div>
                        <div>
                            <button className="btns" onClick={() => setInput(input + '4')}>4</button>
                            <button className="btns" onClick={() => setInput(input + '5')}>5</button>
                            <button className="btns" onClick={() => setInput(input + '6')}>6</button>
                        </div>
                        <div>
                            <button className="btns" onClick={() => setInput(input + '7')}>7</button>
                            <button className="btns" onClick={() => setInput(input + '8')}>8</button>
                            <button className="btns" onClick={() => setInput(input + '9')}>9</button>
                        </div>
                        <button className="btns" onClick={() => setInput(input + '0')}>0</button>
                        <button className="btns" onClick={() => setInput("")}>clr</button>
                        <div><button className="style4"> Next</button></div>
                        <p className="style5">By creating apassword code you agree our <span className=" style6">Terms and conditions</span></p>
                    </div>
                </div>


            </div>
            <div className="smartphone">
                <div className="content">

                    <div className="class1">
                        <div className="margins">
                            <div><b className="style1">Enter code sent </b></div>
                            <div> <b className="style2"> your mobile number</b></div>
                            <p className="style3">we will send you number ...123456.*****...</p>
                        </div>
                        <label>
                            <input type="radio" className="pass" name="output" value={output} onChange={Handler} />
                            <input type="radio" />
                            <input type="radio" />
                            <input type="radio" />
                        </label>

                        <div>
                            <button className="btns" onClick={() => setOutput(output + '1')}>1</button>
                            <button className="btns" onClick={() => setOutput(output + '2')}>2</button>
                            <button className="btns" onClick={() => setOutput(output + '3')}>3</button>


                        </div>
                        <div>
                            <button className="btns" onClick={() => setOutput(output + '4')}>4</button>
                            <button className="btns" onClick={() => setOutput(output + '5')}>5</button>
                            <button className="btns" onClick={() => setOutput(output + '6')}>6</button>
                        </div>
                        <div>
                            <button className="btns" onClick={() => setOutput(output + '7')}>7</button>
                            <button className="btns" onClick={() => setOutput(output + '8')}>8</button>
                            <button className="btns" onClick={() => setOutput(output + '9')}>9</button>
                        </div>
                        <button className="btns" onClick={() => setOutput(output + '0')}>0</button>
                        <button className="btns" onClick={() => setOutput("")}>clr</button>
                        <div className="Resend">Resend Code in 00.47</div>
                        <div><button className="sty"> Enter</button></div>
                        <p className="style5">By creating apassword code you agree our <span className=" style6">Terms and conditions</span></p>
                    </div>
                </div>


            </div>
        </div>

    )
}
export default Mobile2;