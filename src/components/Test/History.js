import React from 'react'
import "./heading.css"

const History = ({ plAScore, plBScore, myArray }) => {
  return (
    <div>
      {/* Modal */}
      <div className="modal fade " id="History_open" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content text-center">
            <div className="modal-header">
              <div className="text-center">
                {/* <h1 className="modal-title fs-5 text-center" id="exampleModalLabel">Modal title</h1> */}
                {(myArray.length === 0) ? "" : <h6 className="text-center headingLot">Lottery Game Results</h6>}
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">


              {(myArray.length === 0) ?
                <div className='text-center'>
                  <h2 className='text-center text-danger'><i className="fa fa-exclamation-circle" aria-hidden="true"></i> &nbsp;No Records</h2>
                  <p className='para_msg'>Try to reach the target to see your performance, no records available right now.</p>
                  <img src="./Images/try.webp" alt="" height={400} className='text-center' width={450} />
                </div> :
                <>
                  <table className="table table-striped table-bordered table-dark text-center">
                    <thead>
                      <tr>
                        <th scope="col">Sl</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Blue Score</th>
                        <th scope="col">Red Score</th>
                        <th scope="col">Winner</th>
                        <th scope="col">Winning Margin</th>
                      </tr>
                    </thead>
                    <tbody className='text-center table-primary'>

                      {myArray.map((data) => (
                        <tr key={data.id}>
                          <td>{data.id + 1}</td>
                          <td>{data.date}</td>
                          <td>{data.time}</td>
                          <td>{data.Your_score}</td>
                          <td>{data.opponent_Score}</td>
                          <td>{data.winner}</td>

                          <td>{data.winning_margin}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default History