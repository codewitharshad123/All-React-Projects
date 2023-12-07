import React,{useState} from "react"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { userRows }  from "../../dummyData";
import {Link} from "react-router-dom"
import "./userList.css";
function UserList(){
  const [data,setData] = useState(userRows)
  const handleDelete = (id) =>{
setData(data.filter(item=>item.id !==id))
  }
  const columns= [
    { field: 'id', headerName: 'ID', width: 90},
    { field: 'user', headerName: 'userName', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 ,renderCell:(params)=>{
return (
  <div className="userListUser">
<img  className="userListImg" src={params.row.avtar} alt=""/>
{params.row.userName}
  </div>
)
    }},
    { field: 'status', headerName: 'Status', width: 200 },
    {field: 'transaction',headerName: 'Transaction',width: 160,},
    {field:"action",headerName:"Transaction Value",width:150,
    renderCell:(params)=>{
      return(
        <>
        <Link to={"/user/"+params.row.id}>
          <button className="userListEdit">Edit</button>
          </Link>
          <DeleteIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
        </>
      )
    }
  }
  ];
  
  
    return(
        <div className="userList">
      <DataGrid
        rows={data} disableSelectiononClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
        </div>
    )
}
export default UserList