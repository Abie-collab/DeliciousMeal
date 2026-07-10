import empty from './assets/empty.jpg'

function Content(){
    return <>
        <div className="col-md-6 p-4">
           <img src={empty} alt="" className="img-fluid rounded" />
        </div>
        <div className="col-md-6 p-4">
             <h3 style={{ color: 'yellow', backgroundColor: 'black',padding: '10px' }} className='mt-5'>Blog Section</h3>
             <p>Welcome to our blog section</p>
             <button onClick={() => {alert("Enjoy surfing our blog!")}} type="button" className="btn btn-dark">Learn More</button>
        </div>
    </>
}

export default Content