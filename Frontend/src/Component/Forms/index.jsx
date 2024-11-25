import CreateRoomForm from './CreateRoomForm';
import   './index.css';
import JoinRoomForm from './JoinRoomForm';
const Forms =()=>{
    return(
       <>
       <div className="row h-100 pt-5">
        <div className="form-box col-md-4 border  rounded-2 px-3 py-5 mx-auto d-flex flex-column align-items-center">
            <h1 className='text-primary fw-bold'>Create Room</h1>
            <CreateRoomForm/>
        </div>
        <div className="form-box col-md-4 border  rounded-2  px-3 py-5 mx-auto d-flex flex-column align-items-center">
            <h1 className='text-primary fw-bold'>Join Room</h1>
            <JoinRoomForm/>
        </div>
       </div>
       </>
    ); 
   }
   export default Forms;