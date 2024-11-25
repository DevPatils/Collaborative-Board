const CreateRoomForm = () => {
    return (
        <>
            <form className="form col-md-12 mt-5 ">
                <div className="form-group">
                    
                    <input type="text" className="form-control my-2" id="roomName" placeholder="Enter Your Name" />
                </div>
                <div className="form-group border ">

                
                
                    <div className="input-group d-flex align-items-center justify-content-center">
                    <input type="text" className="form-control my-2" id="roomName" placeholder="Generate Room Code" />
   
                        <div className="input-group-append ">
                            <button type="button" className="btn btn-primary btn-sm me-1">Generate</button>
                            <button type="button"className="btn btn-outline-danger btn-sm me-1"> Copy</button>
                        </div>
                        </div>
                    </div>
                
            </form>
        </>

    )
}

export default CreateRoomForm;