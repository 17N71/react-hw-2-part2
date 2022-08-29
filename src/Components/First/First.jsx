import React, {useState} from 'react';
function First(props) {
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    function lastNameChange(event) {
        setLastName(event.target.value)
    }
    function firstNameChange(event) {
        setFirstName(event.target.value)
    }
    function handleDate(){
        const date = {
            firstname:firstName,
            lastname:lastName
        }
        setFirstName("")
        setLastName("")
        console.log(date)

    }
    return (
            <div className="card w-100 min-vh-100 d-flex justify-content-center align-items-center">
                <div className="card-form bg-primary bg-gradient">
                    <input type="text" className="form-control w-75 my-lg-1" value={firstName} aria-label="Default" onChange={firstNameChange}
                           aria-describedby="inputGroup-sizing-default" placeholder="Firstname"  />
                    <input type="text" className="form-control w-75 my-lg-1" value={lastName} aria-label="Default" onChange={lastNameChange}
                           aria-describedby="inputGroup-sizing-default" placeholder="Lastname" />
                    <div className={'text-white-50 mt-4 mb-2'}>firstname: <span className={'text-light'}> {firstName}</span></div>
                    <div className={'text-white-50 mt-2'}>lastname: <span className={'text-light'}> {lastName}</span></div>

                    <input className="btn btn-primary mt-3 border-dark" type="submit" value="Submit" onClick={handleDate} />
                </div>
            </div>
    );
}

export default First;