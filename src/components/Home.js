import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';
import Contact from './Contact';
import NavOne from './NavOne';

const Home = () => {

  const radioRef1 = useRef(null);
  const radioRef2 = useRef(null);
  const radioRef3 = useRef(null);
  const radioRef4 = useRef(null);
  const radioRef5 = useRef(null);
  const radioRef6 = useRef(null);

  const handleUncheck = () => {
    radioRef1.current.checked = false;
    radioRef2.current.checked = false;
    radioRef3.current.checked = false;
    radioRef4.current.checked = false;
    radioRef5.current.checked = false;
    radioRef6.current.checked = false;
  };
  // first data starts
  // target and number of player
  const [TargetNO, setTargetNO] = useState()
  const [numberOfPlayer, setNumberOfPlayer] = useState()

  const targetsetting = (e) => {
    //   String myString = "1234";
    const tar = e.target.value
    const NumberTarget = parseInt(tar);
    setTargetNO(NumberTarget)
  }
  const Playersetting = (e) => {
    //   String myString = "1234";
    const tar = e.target.value
    const NumberTarget = parseInt(tar);
    setNumberOfPlayer(NumberTarget)
  }

  // const [playerOne,setPlayerOne]= useState()
  // const [playerTwo,setPlayerTwo]= useState()

  // console.log(`Your target is : ${TargetNO} type of-- ${typeof TargetNO}
  // and number of players is : ${numberOfPlayer} type of-- ${typeof numberOfPlayer}`);

  // console.log((TargetNO && numberOfPlayer?true:false));
  // target and number of player

  // !generating usestate for robot name

  const [robotName, setRobotName] = useState("");
  const [robotAge, setRobotAge] = useState();

  // ! generating robot name 
  useEffect(() => {

    // Name of robot
    var arrayName = ["Rani", "Sweata", "Anurag", "Pretty", "Mahesh", "Shila", "Jaykishan", "Manish", "Saumya", "Resa", "Kaberi"];
    var randomIndex = Math.floor(Math.random() * arrayName.length);
    var randomElement = arrayName[randomIndex];
    setRobotName(randomElement)
    console.log(`Random Robot name is ${robotName}`);

    //  AGE OF ROBOT
    var arrayAge = [18, 26, 14, 20, 21, 29, 19];
    var randomAgePick = Math.floor(Math.random() * arrayAge.length);
    var randomAge = arrayAge[randomAgePick];
    setRobotAge(randomAge);
    // console.log(`Robot age is ${robotAge}`);


  }, [robotName])

  const navigate = useNavigate()
  const goToGame = () => {
    navigate('/game', { state: { robotName, robotAge, TargetNO, numberOfPlayer } })
  }

  // first data ends

  const CloseAll = () => {
    handleUncheck()
    setNumberOfPlayer();
    setTargetNO();
  }


  const whiteText = { color: "white" }
  return (
    <>
      <NavOne whiteText={whiteText} gameMode={"off"} />


      <div className="main_header" style={{ overflow: "hidden" }}>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={10000}>
              <img src="./Images/b3.jpg" className="d-block w-100" alt="..." height={400} />
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img src="./Images/b12.jpg" className="d-block w-100" alt="..." height={400} />
            </div>
            <div className="carousel-item">
              <img src="./Images/b6.jpg" className="d-block w-100" alt="..." height={400} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="about_section my-4" style={{
          // border:"2px solid red",
          marginLeft: "6%"
        }}>
          <h1 className="text-center tagLine"> <span className='text-danger'>A</span>bout</h1> <hr />
          <div className="row text-right">
            <div className="col-md-3 mx-5" >
              <img src="./Images/loto2.jpg" className="d-block w-100" alt="..." height={350} />
            </div>
            <div className="col-md-7">
              <p style={{ textAlign: "justify", fontSize: "15px" }}>Welcome to Lucky Lotto! Our game offers you a unique blend of excitement and strategy. You'll get to choose between playing with a friend or challenging a clever robot. To get started, it's easy to customize your preferences. In the 'Choose Your Opponent' section, you have two options: 'robot' and 'friend.' If you're up for a friendly competition, select 'friend' to play with a buddy. If you're looking for a tougher challenge, opt for 'robot' to take on our strategic robot opponent.

                Your goal? Achieve a target score that both players, whether you and a friend or you and the robot, aim for. The available options are 3, 5, 10, and 20. The first player to hit the target score emerges as the winner.

                In a match against a friend, the rivalry is friendly as you both race to the target score. But if you're up against a robot, prepare for a test of wits. You'll need to outsmart the robot to secure your victory.

                Plus, don't miss out on the chance to engage in dynamic conversations with the robot. Ask questions, interact, and marvel at its programmed responses.

                With each match, you might face a different robot opponent, keeping the challenge fresh. You can even choose to go head-to-head with the same robot again.

                So, whether you're sharing the excitement with a friend or seeking to conquer our robot adversaries, Lucky Lotto promises an unforgettable gaming experience. The choice is yours – enjoy camaraderie or embrace the thrill of rivalry. Get ready to play and win!</p>
              <div className="row">
                <div className="col-md-6">
                  <img src="./Images/ball2.jpg" className="d-block w-100" alt="..." height={200} />
                </div>
                <div className="col-md-6">
                  <img src="./Images/b6.jpg" className="d-block w-100" alt="..." height={200} />
                </div>
              </div>
            </div>
          </div>

        </div>
        <Contact />
        {/* write more after about */}
        <Footer />




        {/* modal for Get started */}
        <div>

          <div className="modal fade" id="getStated" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header" style={{
                  border: "2px solid green",
                  paddingLeft: "14%"
                }}>
                  <h1 className="modal-title fs-5  text-center mx-4 text-success" id="exampleModalLabel">{(TargetNO && numberOfPlayer) ? <p>Your Target is:{TargetNO} and Player is: {numberOfPlayer}</p> : <><p className='text-center mx-5'>Welcome To lottery Game</p></>}</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={CloseAll} />
                </div>
                <div className="modal-body" style={{
                  // border:"2px solid green",
                  paddingLeft: "15%",
                  letterSpacing: "3px"
                }}>
                  {/* body first data starts */}


                  <div className='px-3 mx-5'>
                    <label className="form-check-label my-2" htmlFor="inlineRadio1">Choose your Opponent:</label><br />
                    <input className='form-check-input' type="radio" name="PlayerNumber" ref={radioRef1} value={1} onChange={Playersetting} id="inlineRadio1" /> <span className='m-2'>Robot &nbsp;&nbsp;&nbsp;</span>
                    <input className='form-check-input' type="radio" name="PlayerNumber" ref={radioRef2} value={2} onChange={Playersetting} id="inlineRadio1" /><span className='mx-2'>Friend &nbsp;&nbsp;&nbsp;</span>
                  </div>

                  <div className='px-3 mx-5'>
                    <label htmlFor="" className="form-check-label px-2 mx-5 py-4">Target:</label><br />
                    <input className='form-check-input' type="radio" name="SetPlayerTarget" ref={radioRef3} value={3}
                      onChange={targetsetting} id="inlineRadio1" /> 3 &nbsp;&nbsp;
                    <input className='form-check-input' type="radio" name="SetPlayerTarget" ref={radioRef4} value={5}
                      onChange={targetsetting} id="inlineRadio1" /> 5 &nbsp;&nbsp;
                    <input className='form-check-input' type="radio" name="SetPlayerTarget" ref={radioRef5} value={10}
                      onChange={targetsetting} id="inlineRadio1" /> 10 &nbsp;&nbsp;
                    <input className='form-check-input' type="radio" name="SetPlayerTarget" ref={radioRef6} value={20}
                      onChange={targetsetting} id="inlineRadio1" /> 20 &nbsp;&nbsp;
                  </div>

                  {/* <button onClick={handleUncheck}>Unselect Radio</button> */}





                  {/* body first data ends */}
                </div>
                <div className="modal-footer">
                  {(TargetNO && numberOfPlayer) ?
                    <>
                      <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={goToGame}>Start Game</button>
                    </> : <>
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={CloseAll}>Close</button>
                    </>}
                  {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={CloseAll}>Close</button>
          <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={CloseAll}>Start Game</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modal for Get started */}



        {/* modal starts for instruction */}
        <div>
          {/* Modal */}
          <div className="modal fade" id="Open_InstructionPage" tabIndex={-1} aria-labelledby="exampleModalLabel2" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel"><span className='text-danger'>G</span>ame <span className='text-danger'>I</span>nstructions</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  {/* Welcome to Lucky Lotto! In this game, you have the option to play with a friend or play against a robot. To begin the game, you need to set your preferences:
Select the number of players:

Choose "2" to play with a friend.
Choose "1" to play against a robot.

Select a target score that both players (you and your friend or you and the robot) aim to achieve.
The available options are 3, 5, 10, and 20.
The player who reaches the target score first will be the winner.
If you select to play with a friend, both of you will compete against each other to reach the target score.
If you chose to play against a robot, you will compete against it to reach the target score and win the game. Additionally, you have the ability to engage in conversations with the robot. Ask questions or interact with the robot, and it will respond dynamically based on its programming.

In each match, you may be paired with a different robot, but it is also possible to play against the same robot again.

Enjoy playing with your friend or challenging the robot opponents in Lucky Lotto! */}


                  <div className="instructionBody text-justify bg-light">
                    <h6 className='text-center'><span className='text-danger'>W</span>elcome <span className='text-danger'>t</span>o <span className='text-danger'>L</span>ucky <span className='text-danger'>L</span>otto!</h6><hr />
                    <h7><span className='text-danger'>G</span>ame Modes:</h7>
                    <ul>
                      <li>Play with a friend</li>
                      <li>Play against a robot</li>
                    </ul><hr />

                    <h6 className='text-center'><span className='text-danger'>S</span>et <span className='text-danger'>Y</span>our <span className='text-danger'>P</span>references:</h6><hr />
                    <h7><span className='text-danger'>C</span>hoose your Opponent:</h7>
                    <ul>
                      <li>Choose "Robot" to play against an robot opponent based on the custom programming.</li>
                      <li>Choose "Friend" to enjoy a friendly game with your friend.</li>
                    </ul>

                    <h7><span className='text-danger'>C</span>hoose a target score:</h7>
                    <ul>
                      <li>Options: 3, 5, 10, 20</li>
                    </ul><hr />

                    <h6 className='text-center'><span className='text-danger'>G</span>ameplay:</h6><hr />
                    <p className='m-0 p-0'>Players aim to reach the target score first to win.</p>
                    <p className='m-0 p-0' >If playing with a friend:</p>
                    <ul>
                      <li>Compete against each other to reach the target score.</li>
                    </ul>

                    <p className='m-0 p-0'>If playing against a robot:</p>
                    <ul>
                      <li>Compete against the robot to reach the target score. Moreover, enjoy the added feature to:
                        <ul>
                          <li>Interact dynamically with the robot.</li>
                          <li>Ask questions and engage in conversations.</li>
                        </ul>

                      </li>
                    </ul>

                    <h7 className='m-0 p-0'>Note:</h7>
                    <ul>
                      <li>You might face different robot opponents in each match.</li>
                      <li>It is also possible to play against the same robot again.</li>
                    </ul>

                    <p>Enjoy Lucky Lotto with friends or challenge robot opponent!</p>
                  </div>



                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-info" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modal ends for instruction */}



      </div>












    </>
  )
}

export default Home