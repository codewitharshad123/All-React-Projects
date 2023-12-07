import React from "react"
import "./newUser.css"
function NewUser(){
    return(
        <div className="newUser">
<h1 className="newUserTitle">New User</h1>
<form  className="newUserForm">
<div className="newUserItem">
    <label>Username</label>
    <input type="text" placeholder="ARSHAD"/>
</div>
<div className="newUserItem">
    <label>Full Name</label>
    <input type="text" placeholder="MUHAMMAD AKHTAR"/>
</div>
<div className="newUserItem">
    <label>Email</label>
    <input type="email" placeholder="arshadmanzoor000666@gmail.com"/>
</div>
<div className="newUserItem">
    <label>Password</label>
    <input type="password" placeholder="please enter the password"/>
</div>
<div className="newUserItem">
    <label>Phone</label>
    <input type="password" placeholder="+92-30260-45-904"/>
</div>
<div className="newUserItem">
    <label>Adress</label>
    <input type="text" placeholder="Ahemd PArk Jaranwla"/>
</div>
<div className="newUserItem">
    <label>Gneder</label>
    <div className="newUserGender">
    <input type="radio" name="gender" id="male" value="male"/>
    <label for="male">Male</label>
    <input type="radio" name="gender" id="female" value="female"/>
    <label for="female">Female</label>
    <input type="radio" name="gender" id="other" value="other"/>
    <label for="other">Other</label>
    </div>
</div>
<div className="newUserItem">
<label>Active</label>
<select className="newUserSelect" name="active" id="active">
<option value="yes">Yes</option>
<option value="no">No</option>
</select>
</div>
</form>
<button className="newUserButton">Create</button>
        </div>
    )
}
export default NewUser