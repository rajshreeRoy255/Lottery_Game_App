import React, { useRef, useState } from 'react'
// import Player2Box from './Player2Box';

const LotteryMain = () => {


    // Number of Players
    const TotalPlayer = 1;
    const StartingMsg = "Whose Selected Number Is Close To Or Matches The Lottery Number Will Win The Game"

    const [playerA, setPlayerA] = useState();
    const [playerB, setPlayerB] = useState();
    const [randomNum, setRandomNum] = useState(null)

    const [message, setMessage] = useState(StartingMsg);

    // Scores of players
    const [plAScore, setPlAScore] = useState(0);
    const [plBScore, setPlBScore] = useState(0);

    // after success after getting target
    const [success, getSuccess] = useState(false);


    //target 
    const targetScore = 3;
    const startingAgainNumber = "Chalo"

    //target ends


    // video
    const LeftVideo = useRef();
    const RightVideo = useRef();
    // function starts

    const LeftPlay = () => {
        LeftVideo.current.play();
    }
    const LeftStop = () => {
        LeftVideo.current.pause();
        LeftVideo.current.currentTime = 0;
    }
    const RightPlay = () => {
        RightVideo.current.play();

    }
    const RightStop = () => {
        RightVideo.current.pause();
        RightVideo.current.currentTime = 0;
    }

    // video

    //handleInput Onchange
    const handlePlayerAInput = (e) => {

        setPlayerA(e.target.value)
        RightStop();
        LeftStop();

        if (TotalPlayer === 1) {
            //ROBOT NUMBER SELECTION
            setTimeout(() => {
                const RobotNumber = Math.floor((Math.random() * 100) + 1);
                setPlayerB(RobotNumber)
            }, 1000);
            //ROBOT NUMBER SELECTION
        }



    }
    const handlePlayerBInput = (e) => {
        setPlayerB(e.target.value)
        RightStop();
        LeftStop();

    }


    const tryAgain = () => {
        // console.log("try again");
        getSuccess(false);
        setPlBScore(0)
        setPlAScore(0);

        setPlayerA(startingAgainNumber)
        setPlayerB(startingAgainNumber)

        setRandomNum(null)
        setMessage(StartingMsg)

    }






    const play = () => {


        // Video Stop
        RightStop();
        LeftStop();
        //  target
        if (plAScore === targetScore) {
            // Robot
            if (TotalPlayer === 1) {
                alert("HUMAN WINS THE GAME");
                getSuccess(true);
            } else {
                alert("Player A wins this game")
                getSuccess(true)
            }



        } else if (plBScore === targetScore) {
            if (TotalPlayer === 1) {
                alert("ROBOT WINS THE GAME");
                getSuccess(true);
            } else {
                alert("Player B wins this game")
                getSuccess(true)
            }
        } else if (playerA > 100 || playerB > 100) {
            alert("Number should not be less than 100")
            //    setMessage("Number less than 100")
        } else {
            // Random
            const randomNumber = Math.floor((Math.random() * 100) + 1);
            setRandomNum(randomNumber);
            const PlyrA = Math.abs(randomNumber - playerA);
            const PlyrB = Math.abs(randomNumber - playerB);


            //  console.log(`random:${randomNumber} and playerA: ${PlyrA} playerB: ${PlyrB}`);
            if (PlyrA > PlyrB) {
                setPlBScore(plBScore + 1);
                if (TotalPlayer === 1) {
                    setMessage("ROBOT WINS")
                } else {
                    setMessage("Player B Wins")
                }
                //  ! if B wins
                RightPlay()
            } else {
                setPlAScore(plAScore + 1);
                setMessage("HUMAN WINS")
                //  ! if A wins
                LeftPlay();
            }

        }

    }




    // reset function
    const ResetFun = () => {
        tryAgain();
        getSuccess(true);
        RightStop();
        LeftStop();

    }
    // reset function








    // my function

    //functions ends
    return (
        <div className="container-fluid my-5 m-auto text-center text-success py-2">
            {(randomNum === null) ?
                <>
                    <h1>Lets Us Play Mini Lottery Game</h1>

                </> :
                <>
                    <h1>Lucky Number Is {randomNum}</h1>

                </>
            }
            {/* <p style={{visibility:"hidden"}}>Raju Ramu</p> */}
            <p>{message}</p>

            <div className="row m-auto text-center customDividedBox" style={{
                // border:"2px solid red", 
            }}>
                <div className="box" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="videoDiv" style={{ visibility: (success === true) ? "hidden" : "visible" }}>
                        <video style={{ height: 250 }} ref={LeftVideo}>
                            <source src='./Videos/red.mp4' type='Video/mp4' height={100} />
                        </video>
                    </div>

                    <div className="col-md-4 mx-2 my-2 scoreTitle" style={{ border: "2px solid green" }}>
                        <strong className='strongScore text-primary'>{`${(TotalPlayer === 1) ? "HUMAN SCORE:" : "Player A Score:"} `}<span>{plAScore}</span></strong>

                        <div className="inputNumber">
                            <i className="fa fa-user humanIcon BlueHuman"></i>
                            <input type="number" className='text-center my-3' placeholder="Enter Number" value={playerA}
                                onChange={handlePlayerAInput} autoComplete='off' style={{ visibility: (success === true) ? "hidden" : "visible" }} />
                        </div>
                    </div>

                    {TotalPlayer === 1 ?
                        <>
                            <div className="col-md-4 mx-2 my-2 scoreTitle ROBOT" style={{ border: "2px solid blue" }}>
                                <strong className=' strongScore  text-danger'>ROBOT SCORE:<span>{plBScore}</span></strong>
                                <div className="inputNumber">
                                    <i className="fa fa-android humanIcon Redhuman" ></i>
                                    <input type="number" className='text-center my-3' placeholder="Enter Number" value={playerB}
                                        onChange={handlePlayerBInput} autoComplete='off' style={{ visibility: (success === true) ? "hidden" : "visible" }} readOnly />
                                </div>
                            </div>
                            <div className="videoDiv" style={{ visibility: (success === true) ? "hidden" : "visible" }}>
                                <video style={{ height: 250 }} ref={RightVideo}>
                                    <source src='./Videos/robot.mp4' type='Video/mp4' height={100} className='ROBOT' />
                                </video>
                            </div>
                        </> :
                        <>
                            <div className="col-md-4 mx-2 my-2 scoreTitle B-PLAYER" style={{ border: "2px solid blue" }}>
                                <strong className=' strongScore  text-danger'>Player B Score:<span>{plBScore}</span></strong>
                                <div className="inputNumber">
                                    <i className="fa fa-user humanIcon Redhuman" ></i>
                                    <input type="number" className='text-center my-3' placeholder="Enter Number" value={playerB}
                                        onChange={handlePlayerBInput} autoComplete='off' style={{ visibility: (success === true) ? "hidden" : "visible" }} />
                                </div>
                            </div>
                            <div className="videoDiv" style={{ visibility: (success === true) ? "hidden" : "visible" }}>
                                <video style={{ height: 250 }} ref={RightVideo}>
                                    <source src='./Videos/blue.mp4' type='Video/mp4' height={100} />
                                </video>
                            </div>
                        </>}


                    {/* ------------------------------ ROBOT STARTS ----------------------------------- */}
                    {/* <div className="col-md-4 mx-2 my-2 scoreTitle ROBOT"  style={{border:"2px solid blue"}}>
    <strong className=' strongScore  text-danger'>ROBOT SCORE:<span>{plBScore}</span></strong>
    <div className="inputNumber">
    <i className="fa fa-android humanIcon Redhuman" ></i>
<input type="number" className='text-center my-3' placeholder="Enter Number" value={playerB} 
              onChange={handlePlayerBInput} autoComplete='off' style={{visibility:(success===true)?"hidden":"visible"}} readOnly/>
</div>
    </div>
    <div className="videoDiv" style={{visibility:(success===true)?"hidden":"visible"}}>
    <video style={{height:250}} ref={RightVideo}>
    <source src='./Videos/robot.mp4' type='Video/mp4' height={100} className='ROBOT'/>
 </video>
 </div> */}

                    {/* ------------------------------ ROBOT ENDS ----------------------------------- */}



                    {/* PLAYER B */}

                    {/* <div className="col-md-4 mx-2 my-2 scoreTitle B-PLAYER"  style={{border:"2px solid blue"}}>
    <strong className=' strongScore  text-danger'>Player B Score:<span>{plBScore}</span></strong>
    <div className="inputNumber">
    <i className="fa fa-user humanIcon Redhuman" ></i>
<input type="number" className='text-center my-3' placeholder="Enter Number" value={playerB} 
              onChange={handlePlayerBInput} autoComplete='off' style={{visibility:(success===true)?"hidden":"visible"}}/>
</div>
    </div>
    <div className="videoDiv" style={{visibility:(success===true)?"hidden":"visible"}}>
    <video style={{height:250}} ref={RightVideo}>
    <source src='./Videos/blue.mp4' type='Video/mp4' height={100}/>
 </video>
 </div>  */}
                    {/* PLAYER B */}

                </div>
            </div>
            {(success === false ? <button className="btn btn-warning my-4 custombtn" onClick={play}>Play</button> : <button className="btn btn-warning my-4 custombtn" onClick={tryAgain}>Try Again</button>)}

            {/* <div className="videoBtn">
<button className='btn btn-sm btn-success mx-5' onClick={LeftPlay}>Left Play</button>
<button className='btn btn-sm btn-danger mx-5' onClick={LeftStop}>Left stop</button>
<button className='btn btn-sm btn-success' onClick={RightPlay}>Right Play</button>
<button className='btn btn-sm btn-danger' onClick={RightStop}>Right Stop</button>
<button className='btn btn-sm btn-danger' onClick={ResetFun}>Reset</button>
</div> */}
        </div>//!return function div ends
    )
}

export default LotteryMain