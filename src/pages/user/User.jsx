import React from "react"
import {Link} from "react-router-dom"
import "./user.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublishIcon from '@mui/icons-material/Publish';
function User(){
    return(
        <div className="user">
<div className="userTitleContainer">
<h1 className="userTitle">Edit User</h1>
<Link to="/newUser">
<button className="userAddButton">Create</button>
</Link>
</div>
<div className="userContainer">
<div className="userShow">
<div className="userShowTop">
    <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"  alt="" className="userShowImg"/>
<div className="userShowTopTitle">
<span className="userShowUsername">Anna Becker</span>
<span className="userShowUserTitle">Software Engineer</span>
</div>
</div>
<div className="userShowBottom">
    <span className="userShowTitle">Contact Detailes</span>
    <div className="userShowInfo">
    <PermIdentityIcon className="userShowIcon"/>
    <span className="userShowInfoTitle">annaback99</span>
    </div>
    <div className="userShowInfo">
    <CalendarTodayIcon className="userShowIcon"/>
    <span className="userShowInfoTitle">BirthDay</span>
    </div>
    <div className="userShowInfo">
    <PhoneAndroidIcon className="userShowIcon"/>
    <span className="userShowInfoTitle">+92 302-60-45-904</span>
    </div>
    <div className="userShowInfo">
    <MailOutlineIcon className="userShowIcon"/>
    <span className="userShowInfoTitle">arshadmanzoor00666@gmail.com</span>
    </div>
    <div className="userShowInfo">
    <LocationOnIcon className="userShowIcon"/>
    <span className="userShowInfoTitle">Ahem Park Jaranwala</span>
    </div>
</div>
</div>
<div className="userUpdate">
<span className="userUpdateTitle">Edit</span>
<form className="userUpdateForm">
<div className="userUpdateLeft">
    <div className="userUpdateItem">
        <label>Username</label>
        <input type="text" placeholder="this is arshad is" className="userUpdatesInput"/>
    </div>
    <div className="userUpdateItem">
        <label>Full Name</label>
        <input type="text" placeholder="Muhammad Arshad" className="userUpdatesInput"/>
    </div>
    <div className="userUpdateItem">
        <label>Email</label>
        <input type="text" placeholder="arshadmanzoor00666@gmail.com" className="userUpdatesInput"/>
    </div>
    <div className="userUpdateItem">
        <label>Phone Number</label>
        <input type="text" placeholder="+92-302-60-45-904" className="userUpdatesInput"/>
    </div>
    <div className="userUpdateItem">
        <label>Adress</label>
        <input type="text" placeholder="New York | USA" className="userUpdatesInput"/>
    </div>
</div>
<div className="userUpdateRight">
   <div className="userUpdateUpload">
<img  className="userUpdateImg"  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
<label htmlFor="file"><PublishIcon className="userUpdateIcon"/></label>
<input type="file" id="file" style={{display:"none"}}/>
   </div>
   <button className="userUpdateButton">Update</button>
</div>
</form>
</div>
</div>
        </div>
    )
}
export default User