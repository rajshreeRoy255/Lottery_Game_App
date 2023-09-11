import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const FirstPage = () => {



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

  // console.log(`Your target is : ${TargetNO} type of-- ${typeof TargetNO }
  // and number of players is : ${numberOfPlayer} type of-- ${typeof numberOfPlayer }` );

  // console.log((TargetNO && numberOfPlayer?true:false));
  // target and number of player

  // generating usestate for robot name

  const [robotName, setRobotName] = useState("");
  const [robotAge, setRobotAge] = useState();

  //  generating robot name 
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


  return (
    <>
      <div className="container m-auto text-center my-4">
        <h1>Lottery welcome</h1>
        {/* <h1>Robot Name: {robotName} and robot age: {robotAge}</h1> */}
        {(TargetNO && numberOfPlayer) ? <p>Your Target is:{TargetNO} and Player is: {numberOfPlayer}</p>
          :
          <><p style={{ visibility: "hidden" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam ex ratione dicta quos. Quis dolores culpa velit, numquam adipisci quam dolorem natus.</p></>
        }

        <div className="box">
          <div>
            <label className="form-check-label" htmlFor="inlineRadio1">Number of Players:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name='PlayerNumber' value={1} onChange={Playersetting} id="inlineRadio1" />
              <label className="form-check-label" htmlFor="inlineRadio1">1</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name='PlayerNumber' value={2} onChange={Playersetting} id="inlineRadio1" />
              <label className="form-check-label" htmlFor="inlineRadio1">2</label>
            </div>
          </div>

          <div>
            <label className="form-check-label" htmlFor="inlineRadio1">Select Your Target:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name='SetPlayerTarget' value={3}
                onChange={targetsetting} id="inlineRadio1" />
              <label className="form-check-label" htmlFor="inlineRadio1">3</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name='SetPlayerTarget' value={5}
                onChange={targetsetting} id="inlineRadio1" />
              <label className="form-check-label" htmlFor="inlineRadio1">5</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name='SetPlayerTarget' value={10}
                onChange={targetsetting} id="inlineRadio1" />
              <label className="form-check-label" htmlFor="inlineRadio1">10</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name='SetPlayerTarget' value={20}
                onChange={targetsetting} id="inlineRadio1" />
              <label className="form-check-label" htmlFor="inlineRadio1">20</label>
            </div>
          </div>



          <div className="container my-4" style={{ textAlign: "justify" }}>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugiat perferendis praesentium asperiores, velit neque repellat fugit repudiandae eveniet aliquam deserunt magni a culpa dolor quisquam voluptates modi odio tenetur, id officiis earum!lorem67
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo dolorum in corrupti recusandae obcaecati dolorem, aut consequatur, repellat, esse ducimus voluptatibus reiciendis itaque nesciunt quia excepturi debitis. Alias quo eum voluptatum et sapiente ab? Minus eaque unde natus animi. Dolorem ducimus laborum incidunt sunt quod, vero tempore molestiae! Tempore aut illum repellat, impedit laboriosam vel quasi quis esse ea non alias perspiciatis asperiores veritatis et quisquam. Laudantium!

          </div>


          <div className="formDetails container m-auto text-center my-5" style={{ width: "60%" }}>
            {/* {numberOfPlayer==="1"?
<>
<div className="input-group">
  <span className="input-group-text">PLayer Name:</span>
  <input type="text" aria-label="First name" className="form-control" autoComplete='off' value={playerTwo} onChange={e=>{setPlayerOne(e.target.value)}}/>
</div>

</>:numberOfPlayer==="2"?
<>
<div className="input-group">
  <span className="input-group-text">Player A Name:</span>
  <input type="text" aria-label="First name" className="form-control" autoComplete='off' value={playerOne} onChange={e=>{setPlayerOne(e.target.value)}}/>
</div><br/><br/>
<div className="input-group">
  <span className="input-group-text">Player B Name:</span>
  <input type="text" aria-label="First name" className="form-control" autoComplete='off' value={playerTwo} onChange={e=>{setPlayerTwo(e.target.value)}}/>
</div>
</>
:""}  */}
          </div>

          {(TargetNO && numberOfPlayer ? <>
            <div className="buttonDiv">
              <button type="button" className="btn btn-primary my-4" onClick={goToGame}>Start Game</button>
            </div></> : "")}
        </div>
      </div>

    </>
  )
}

export default FirstPage