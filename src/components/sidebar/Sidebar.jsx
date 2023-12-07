import React from "react"
import {Link} from "react-router-dom"
import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import PaidIcon from '@mui/icons-material/Paid';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailIcon from '@mui/icons-material/Mail';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MessageIcon from '@mui/icons-material/Message';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReportIcon from '@mui/icons-material/Report';
function Sidebar(){
    return(
        <div className="sidebar">
<div className="sidebarWrapper">
<div className="sidebarMenu">
<h3 className="sidebarTitle">Dashboard</h3>
<ul className="sidebarList">
<li className="sidebarListItem">
<LineStyleIcon className="sidebarIcon"/>
Home
</li>
<li className="sidebarListItem">
<TimelineIcon className="sidebarIcon"/>
Analytics
</li>
<li className="sidebarListItem">
<TrendingUpIcon className="sidebarIcon"/>
Sales
</li>
</ul>
</div>
<div className="sidebarMenu">
<h3 className="sidebarTitle">Quick Menu</h3>
<ul className="sidebarList">
<Link to="/users" className="link">
<li className="sidebarListItem">
<PersonIcon className="sidebarIcon"/>
Users
</li>
</Link>
<Link to="/products" className="link">
<li className="sidebarListItem">
<InventoryIcon  className="sidebarIcon"/>
Products
</li>
</Link>
<li className="sidebarListItem">
<PaidIcon className="sidebarIcon"/>
Transations
</li>
<li className="sidebarListItem">
<AssessmentIcon className="sidebarIcon"/>
Reports
</li>
</ul>
</div>
<div className="sidebarMenu">
<h3 className="sidebarTitle">Notifications</h3>
<ul className="sidebarList">
<li className="sidebarListItem">
<MailIcon className="sidebarIcon"/>
Mail
</li>
<li className="sidebarListItem">
<FeedbackIcon className="sidebarIcon"/>
FeedBack
</li>
<li className="sidebarListItem">
<MessageIcon className="sidebarIcon"/>
Messages
</li>
</ul>
</div>
<div className="sidebarMenu">
<h3 className="sidebarTitle">Staff</h3>
<ul className="sidebarList">

<li className="sidebarListItem">
<ManageAccountsIcon className="sidebarIcon"/>
Mange
</li>
<li className="sidebarListItem">
<TimelineIcon className="sidebarIcon"/>
Analytics
</li>
<li className="sidebarListItem">
<ReportIcon className="sidebarIcon"/>
Reports
</li>
</ul>
</div>
</div>
        </div>
    )
}
export default Sidebar