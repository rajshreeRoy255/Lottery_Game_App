import React from 'react'
import History from './Test/History'

const NavOne = ({ whiteText, gameMode, navBar, ConfirmFun, ResetFun, targetScore, TotalPlayer, value, plAScore, plBScore, myArray, showBot }) => {
    return (
        <>
            {gameMode === "off" ? <>
                <nav className="navbar navbar-expand-lg navbar-light bg-primary customNav sticky-top" style={{ overflow: "hidden" }}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/" style={{
                            ...whiteText,
                            // border:"2px solid red",
                            paddingLeft: "2%"
                        }}> <img src="./Images/ac2.webp" alt="" height={44} /><span className='text-danger' style={{
                            fontSize: "29px",
                            fontWeight: "bold"
                        }}>L</span>ucky <span className='text-danger' style={{
                            fontSize: "23px",
                            // fontWeight:"bold"
                        }}>L</span>otto</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{
                                // border:"2px solid red",
                                width: "60%",
                                paddingLeft: "13%",
                                marginLeft: "5%",
                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                                <li className="nav-item">
                                    <button className="nav-link active" aria-current="page" style={whiteText}><i className="fa fa-home" aria-hidden="true"></i>&nbsp;Home</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link active" aria-current="page" style={whiteText} data-bs-toggle="modal" data-bs-target="#Open_InstructionPage"><i className="fa fa-hand-pointer-o" aria-hidden="true"></i> &nbsp;Instruction</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link active" aria-current="page" href="/" style={whiteText} data-bs-toggle="modal" data-bs-target="#getStated"><i className="fa fa-gamepad" aria-hidden="true"></i>&nbsp;&nbsp;Get Started</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </> : <>
                {/* History programming */}
                <History plAScore={plAScore} plBScore={plBScore} myArray={myArray} />

                {/* History programming */}
                <nav className="navbar navbar-expand-lg navbar-light bg-primary customNav" style={{
                    fontSize: "15px",
                    // border:"2px solid black",
                }}>
                    <div className="container-fluid">
                        <p className="navbar-brand mx-4 customNav" style={{
                            //    border:"2px solid orange",
                            fontSize: "29px",
                            paddingLeft: "5%",
                            cursor: "pointer",
                            ...navBar
                        }} onClick={ConfirmFun}><img src="./Images/ac2.webp" alt="" height={35} /><span className='text-danger' style={{
                            fontSize: "29px",
                            fontWeight: "bold"
                        }}>L</span>ucky <span className='text-danger' style={{
                            fontSize: "23px",
                            // fontWeight:"bold"
                        }}>L</span>otto</p>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{
                            // border:"2px solid green",
                            width: "30%",
                        }}>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{
                                // border:"2px solid red",
                                width: "100%",
                                textAlign: "center",
                                paddingLeft: "6%",
                                height: "48px",

                            }}>
                                <li className="nav-item">
                                    <button className="nav-link active mx-4 custumWhite" aria-current="page" style={{ ...navBar, fontSize: "15px", }} onClick={ConfirmFun}><i className="fa fa-home" aria-hidden="true"></i>&nbsp;Home</button>
                                </li>
                                {/* TotalPlayer */}
                                {TotalPlayer === 1 && showBot ?
                                    <>
                                        <li className="nav-item">
                                            <button className="nav-link active mx-4 custumWhite" aria-current="page" style={navBar} data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-comments" aria-hidden="true" style={{ fontSize: "23px" }}></i> &nbsp;Chat Bot</button>
                                        </li>
                                    </> :
                                    ""}
                                <li className="nav-item">
                                    <button className="nav-link active mx-4 custumWhite" aria-current="page" style={navBar} onClick={ResetFun}><i className="fa fa-history" aria-hidden="true" style={{ fontSize: "18px" }}></i>&nbsp;Restart</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link active mx-4 custumWhite" aria-current="page" style={navBar} data-bs-toggle="modal" data-bs-target="#History_open"><i className="fa fa-university" aria-hidden="true" style={{ fontSize: "17px" }}></i>&nbsp;Performance</button>
                                </li>
                                <li className="nav-item" style={{
                                    // border:"2px solid blue",
                                    paddingLeft: "35%"
                                }}>
                                    <p className="nav-link active mx-4 custumWhite" aria-current="page" style={navBar}><i className="fa fa-trophy" aria-hidden="true" ></i>&nbsp;&nbsp;Target: {targetScore}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


            </>}
        </>
    )
}

export default NavOne