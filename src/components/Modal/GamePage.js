import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './modal.css'
import { useLocation, useNavigate } from 'react-router-dom'
import NavOne from '../NavOne';
const GamePage = () => {
  const location = useLocation();
  const getRobotName = location.state.robotName;
  const robotAge = location.state.robotAge;
  const targetScore = location.state.TargetNO;
  const TotalPlayer = location.state.numberOfPlayer;

  const [showBot, setShowBot] = useState(true);
  const navigate = useNavigate()
  // custom css

  const navBar = {
    color: "white"
  }
  //! states





  // console.log(`showbot --->${showBot}`);








  const [select, setSelect] = useState("")

  const [allowHuman, SetallowHuman] = useState(true)

  // Scores of players
  const [plAScore, setPlAScore] = useState(0);
  const [plBScore, setPlBScore] = useState(0);




  // !  D  A  T E    AND    T  I  M  E  
  // ! Time
  const currentDateAndTime = new Date();
  function formatTime12Hour(date) {
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const twelveHourFormat = (hours % 12) || 12; // Convert to 12-hour format

    return `${twelveHourFormat}:${minutes} ${amOrPm}`;
  }
  const formattedTime = formatTime12Hour(currentDateAndTime);


  // !date
  const dateFormatter = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const formattedDate = dateFormatter.format(currentDateAndTime);
  // console.log(`Date & Time: ${formattedDate}, ${formattedTime}`);

  // !  D  A  T E    AND    T  I  M  E    ends-----------







  // ! Get reply
  const [ans, setAns] = useState();
  // console.log(`Ans kya hai? ${ans}`);

  // functions



  const Close = () => {
    setSelect("")
    setAns()
  }

  // ! conditions to give reply

  // !Name
  useEffect(() => {
    // !NAME
    // ! get different ways of answering your name
    const Name1 = `Hello My name is  ${getRobotName}. Thank You`
    const Name2 = `I am called ${getRobotName}`;
    const Name3 = `My name is ${getRobotName}`;
    const Name4 = `Why do you ask? Are you trying to know me better?Well, my name is ${getRobotName}`;
    const Name5 = `I have many names, but you can call me ${getRobotName}`;
    const Name6 = `Hi, I am ${getRobotName}. Nice to meet you!`;
    const Name7 = `Thanks for asking. My name is ${getRobotName}`;
    const Name8 = `You can call me Captain Awesome! Just kidding, my name is actually ${getRobotName}`
    const Name9 = `Why do you ask? My name is ${getRobotName}, by the way`



    const ansName = [Name1, Name2, Name3, Name4, Name5, Name6, Name7, Name8, Name9]
    var getNamAns = Math.floor(Math.random() * ansName.length);
    var AnsName = ansName[getNamAns];
    // !NAME


    // !AGE
    // ! get different ways of answering your Age

    const Age1 = `I am ${robotAge}.`;
    const Age2 = `I am proud to say I've reached ${robotAge}`;
    const Age3 = `I am ${robotAge} years old .I'm grateful for the ${robotAge} years I've had so far.`;
    const Age4 = `I am ${robotAge} years old, if you are curious.`;
    const Age5 = `Oh, I'm ${robotAge}`;
    const Age6 = `I proudly embrace ${robotAge} years of life`;

    const ansAge = [Age1, Age2, Age3, Age4, Age5, Age6]
    var getAge = Math.floor(Math.random() * ansAge.length);
    var AnsAGE = ansAge[getAge];
    // console.log(`Ans batao age wala ----${AnsAGE}`);

    // !AGE

    // !Yes Or No
    const ansYesNo = ["Yes", "No", "Sure!"];
    const getYesNo = Math.floor(Math.random() * ansYesNo.length);
    const YesNo = ansYesNo[getYesNo];

    // !Yes Or No


    // !who will win starts
    const myScore = plAScore;
    const botScore = plBScore;
    // console.log(`My score: ${myScore} botscore:${botScore}`);

    // todo  BOT HIGH SCORE
    const BotHighScore = [
      "I'm currently ahead, but the game isn't over. Keep playing, anything can happen",
      "I have the lead for now, but stay determined. The game isn't decided yet",
      "I'm currently in the lead, but don't give up. The game is still on",
      "For now, I'm in the lead. Keep playing your best, and fortunes may turn",
      "Oh, I don't want to spoil the surprise for you.",
      "For now, I'm leading. Keep up the effort, as victory is still within reach",
      "Seems like luck is on my side today! But hey, there's always next time to give another shot",
      "I'm leading the way, but keep chasing. There's still a chance for a comeback"
    ]
    const getBotVic = Math.floor(Math.random() * BotHighScore.length);
    const BotVictory = BotHighScore[getBotVic];
    // todo  BOT HIGH SCORE

    const MyHighScore = [
      "You're currently in the lead, but I won't give up easily.",
      "Impressive! You're in the lead, but I'll keep pushing to make a comeback",
      "You're ahead for now. Let's see if I can turn the tables in this exciting game",
      "You've taken the lead, but I'm ready to challenge. Let's make this game truly memorable",
      "You're winning the game, but I'll keep fighting till the end. Let's make it intense",
      "I applaud your lead, but the game is still on. Let's see who emerges victorious",
      "You've got the upper hand, but I won't give up. Let's make this game even more thrilling",
      "Well done! You're winning, but I won't give up",
      "You're winning for now, but I'll keep trying my hardest.",
      "You're dominating the game with your score",
      "I may be trailling behind in points,but I have the spirit of a fighter",
      "It's not over untill it's over.So lets see what unfolds in the remaining time"
    ];
    const getMyVic = Math.floor(Math.random() * MyHighScore.length);
    const MyVictory = MyHighScore[getMyVic];


    // todo  MY SCORE HIGH




    // todo if Same score Tie
    // !Tie Score
    const TieScore = ["It's a close match between us, making it difficult to predict the winner of the lottery game",
      "Uncertain after our tie match. Let's continue playing and find out who wins the lottery game",
      "Tie match, uncertain winner. Let's keep playing the lottery game to see who prevails",
      "Both of us tied, lottery game uncertain. Let's keep playing and let fate decide the winner"
    ];
    const GetTie = Math.floor(Math.random() * TieScore.length);
    const TieAns = TieScore[GetTie];
    // todo if Same score Tie


    //todo Game not started
    // !Tie Score
    const NotStart = ["It's too early to tell. Let's wait for the match to begin and find out!",
      "Since the match hasn't started yet, it's difficult to predict the outcome.",
      "Hard to say before the match starts. We'll see who comes out on top!",
      "Not sure at this point. We'll find out once the match begins",
      "It's too early to make a call. Let's see how the match plays out",
      "We'll have to wait and see. The match hasn't started yet!",
      "Can't predict yet. Let's wait for the match to start and see what happens!",
      "No way to know right now. Let's wait for the match to start and see the outcome"
    ];
    const noStart = Math.floor(Math.random() * NotStart.length);
    const notStated = NotStart[noStart];
    //todo Game not started

    // !who will win ends

    if (select === "What Is Your Name") {
      setAns(AnsName)
    } else if (select === "What is Your Age") {
      setAns(AnsAGE)
    } else if (select === "Can I Select Number For You") {
      setAns(YesNo)
    } else if (select === "What Do You Think Who Is Going To Win The Game") {
      if (myScore > botScore) {
        setAns(MyVictory)
      } else if (myScore === 0 && botScore === 0) {
        setAns(notStated)
      } else if (myScore === botScore) {
        setAns(TieAns)
      } else {
        setAns(BotVictory)
      }

    }
  }, [select])








  useEffect(() => {
    if (ans === "Yes" || ans === "Sure!") {
      SetallowHuman(false)
    }
  }, [ans])



  const OkFunction = () => {
    setSelect("")
    setAns()
  }



  // functions ends



  //!-------------------------------------  LOTTERY MAIN ----------------------
  const StartingMsg = "Ace It With An Exact Or Closest Number To  Claim Your Victory"

  const [playerA, setPlayerA] = useState();
  const [playerB, setPlayerB] = useState();
  const [randomNum, setRandomNum] = useState(null)


  const [message, setMessage] = useState(StartingMsg);

  // ! after success after getting target
  const [success, getSuccess] = useState(false);

  // console.log(`Player A Num input : ${playerA} and B : ${playerB}`);
  // !target 
  // const targetScore = 3;
  const startingAgainNumber = "Chalo"

  // !target ends


  // ! video
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

  // ! video

  // !handleInput Onchange
  const handlePlayerAInput = (e) => {

    setPlayerA(e.target.value)
    RightStop();
    LeftStop();

    if (TotalPlayer === 1) {
      // !ROBOT NUMBER SELECTION
      setTimeout(() => {
        const RobotNumber = Math.floor((Math.random() * 100) + 1);
        setPlayerB(RobotNumber)
      }, 1000);
      // !ROBOT NUMBER SELECTION
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
    setShowBot(true)

  }






  const play = () => {
    SetallowHuman(true)

    // ! Video Stop
    RightStop();
    LeftStop();
    //  target
    if (plAScore === targetScore) {
      //! `````````````````````````````````````````````````````````````````````````````
      //! `````````````````````````````````````````````````````````````````````````````
      //! `````````````````````````````````````````````````````````````````````````````
      // ! Robot
      if (TotalPlayer === 1) {
        toast.success("HUMAN WINS THE GAME");
        getSuccess(true);
        setShowBot(false)
      } else {
        toast.success("Player A wins this game")
        getSuccess(true)
      }



    } else if (plBScore === targetScore) {

      if (TotalPlayer === 1) {
        toast.success("ROBOT WINS THE GAME");
        setShowBot(false)
        getSuccess(true);
      } else {
        toast.success("Player B wins this game")
        getSuccess(true)
      }
    } else if (playerA > 100 || playerB > 100 || playerA <= 0 || playerB <= 0) {
      toast.error("Please select a number between 1 and 100")
      //    setMessage("Number less than 100")
    } else if (playerA === undefined || playerB === undefined || playerA === "" || playerB === "") {
      toast.error("Please fill in the required field before clicking the 'Play' button")
      //    setMessage("Number less than 100")
    } else if (playerA === playerB) {
      toast.error("You must provide unique numbers in both fields before proceeding")
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

  }// ******************************  Play Function Ends **********************






  // confirm
  function ConfirmFun() {
    const answer = window.confirm("Are you sure you want to quit?");
    if (answer) {
      navigate("/")
    } else {

    }
  }
  // confirm




  const [myArray, setMyArray] = useState([])
  const [objId, setObjId] = useState(0)

  useEffect(() => {
    // This effect will run whenever plAScore or plBScore changes
    if (plAScore === targetScore) {
      const obj1 = {
        id: objId,
        date: formattedDate,
        time: formattedTime,
        Your_score: plAScore,
        opponent_Score: plBScore,
        winner: "Blue",
        winning_margin: 0,
        show: "yes"
      };
      const subMargin = Math.abs(plAScore - plBScore);
      obj1.winning_margin = subMargin;
      setObjId(objId + 1)
      setMyArray([...myArray, obj1]);


    } else if (plBScore === targetScore) {
      const obj2 = {
        id: objId,
        date: formattedDate,
        time: formattedTime,
        Your_score: plAScore,
        opponent_Score: plBScore,
        winner: "Red",
        winning_margin: 0,
        show: "yes"
      };
      const subMargin = Math.abs(plAScore - plBScore);
      obj2.winning_margin = subMargin;
      setObjId(objId + 1)
      setMyArray([...myArray, obj2]);
    }
  }, [plAScore, plBScore]);

  useEffect(() => {
    // This effect will run whenever myArray changes
    // console.log(myArray);
  }, [myArray]);




  //  reset function
  const ResetFun = () => {
    const answer = window.confirm("Are you sure you want to restart the game?");
    if (answer) {
      tryAgain();
      getSuccess(true);
      RightStop();
      LeftStop();
      setMyArray([])
      setObjId(0)
    } else {

    }
  }
  //  reset function




















  // my function

  // !functions ends
  //!-------------------------------------  LOTTERY MAIN ----------------------

  return (
    <>
      <div className="main-box">

        {/* <NewNavbar navBar={navBar} ConfirmFun={ConfirmFun} ResetFun={ResetFun} targetScore={targetScore} TotalPlayer={TotalPlayer} value={"game"} plAScore={plAScore} plBScore={plBScore} myArray={myArray} showBot={showBot} gameMode={"on"} /> */}

        <NavOne navBar={navBar} ConfirmFun={ConfirmFun} ResetFun={ResetFun} targetScore={targetScore} TotalPlayer={TotalPlayer} value={"game"} plAScore={plAScore} plBScore={plBScore} myArray={myArray} showBot={showBot} gameMode={"on"} />


        {/* Nav ends here */}

        {/* modal starts for bot*/}
        <div>
          <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl ">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Chat Bot</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={Close} />
                </div>
                <div className="modal-body customBody">
                  <div className="box1">
                    <p>A computer program designed to simulate conversation with human users.</p>
                    <div className="row">
                      <div className="col-md-3"><i className="fa fa-user HumanIcon" aria-hidden="true"></i></div>
                      {/* style={{visibility:(success===true)?"hidden":"visible"}} */}
                      <div className="col-md-6 selectSection">
                        <select className="form-select" aria-label="Default select example" value={select} onChange={(e) => { setSelect(e.target.value) }}
                          disabled={ans ? true : false}
                        >
                          <option value="">Open this select menu</option>
                          <option value="What Is Your Name" >What Is Your Name</option>
                          <option value="Can I Select Number For You">Can I Select Number For You</option>
                          <option value="What is Your Age">What is Your Age</option>
                          <option value="What Do You Think Who Is Going To Win The Game">What Do You Think Who Is Going To Win The Game</option>
                        </select>
                      </div>


                    </div>
                  </div>
                  <div className="box2 my-5">
                    {select ?
                      <>
                        <div className='replyBot'>
                          <div className="row">
                            <div className="col-md-10 message container">
                              <div className="answerBox main_heading custumCursor text" style={{ display: "inline-block" }}>{ans} </div>
                            </div>
                            <div className="col-md-2 botIcon"> <i className="fa fa-android robot" aria-hidden="true" style={{ fontSize: "50px" }}></i></div>
                          </div>
                        </div>
                      </> : ""}

                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-success" onClick={OkFunction}>OK</button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={Close}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modal ends for bot */}





















        {/* <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter number"  readOnly={allowHuman}></input> */}

        {/* main content starts */}
        {/* <div className=" m-auto text-center my-5 w-50" style={{textAlign:"right"}}>
</div> */}
        {/* <LotteryMain/> */}

        <div className="container-fluid my-2 m-auto text-center text-success py-2">
          {(randomNum === null) ?
            <>
              <h3>Let's Dive Into The Fun of The Lottery And See If Luck Is On Your Side!</h3>

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

              <div className="col-md-4 mx-2 my-2 scoreTitle custumBorder" >
                <strong className='strongScore text-primary'>{`${(TotalPlayer === 1) ? "HUMAN SCORE:" : "Player A Score:"} `}<span>{plAScore}</span></strong>

                <div className="inputNumber">
                  <i className="fa fa-user humanIcon BlueHuman"></i>
                  <input type="number" className='text-center my-3' placeholder="Enter Number" value={playerA}
                    onChange={handlePlayerAInput} autoComplete='off' style={{ visibility: (success === true) ? "hidden" : "visible" }} required />
                </div>
              </div>

              {TotalPlayer === 1 ?
                <>
                  <div className="col-md-4 mx-2 my-2 scoreTitle ROBOT custumBorder" >
                    <strong className=' strongScore  text-danger'>ROBOT SCORE:<span>{plBScore}</span></strong>
                    <div className="inputNumber">
                      <i className="fa fa-android humanIcon Redhuman" ></i>
                      <input type="number" className='text-center my-3' placeholder="Enter Number" value={playerB}
                        onChange={handlePlayerBInput} autoComplete='off' style={{ visibility: (success === true) ? "hidden" : "visible" }} readOnly={allowHuman} required />
                    </div>
                  </div>
                  <div className="videoDiv" style={{ visibility: (success === true) ? "hidden" : "visible" }}>
                    <video style={{ height: 250 }} ref={RightVideo}>
                      <source src='./Videos/robot.mp4' type='Video/mp4' height={100} className='ROBOT' />
                    </video>
                  </div>
                </> :
                <>
                  <div className="col-md-4 mx-2 my-2 scoreTitle B-PLAYER custumBorder" >
                    <strong className=' strongScore  text-danger'>Player B Score:<span>{plBScore}</span></strong>
                    <div className="inputNumber">
                      <i className="fa fa-user humanIcon Redhuman" ></i>
                      <input type="number" className='text-center my-3' placeholder="Enter Number" value={playerB}
                        onChange={handlePlayerBInput} autoComplete='off' style={{ visibility: (success === true) ? "hidden" : "visible" }} required />
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
          {(success === false ? <button className="btn btn-warning my-4 custombtn" onClick={play}>Play&nbsp;<i className="fa fa-play" aria-hidden="true"></i></button> : <button className="btn btn-warning my-4 custombtn" onClick={tryAgain}>Try Again</button>)}

          {/* <div className="videoBtn">
<button className='btn btn-sm btn-success mx-5' onClick={LeftPlay}>Left Play</button>
<button className='btn btn-sm btn-danger mx-5' onClick={LeftStop}>Left stop</button>
<button className='btn btn-sm btn-success' onClick={RightPlay}>Right Play</button>
<button className='btn btn-sm btn-danger' onClick={RightStop}>Right Stop</button>
<button className='btn btn-sm btn-danger' onClick={ResetFun}>Reset</button>
</div> */}
        </div>

        {/* main content ends */}

























      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default GamePage