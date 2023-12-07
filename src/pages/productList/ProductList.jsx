import React,{useState} from "react"
import { Link } from "react-router-dom";
import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { productRows }  from "../../dummyData";
function ProductList(){
    const [data,setData]=useState(productRows)

    const handleDelete = (id) =>{
        setData(data.filter(item=>item.id !==id))
          }

          const columns= [
            { field: 'id', headerName: 'ID', width: 90},
            { field: 'product', headerName: 'Product', width: 200 },
            { field: 'email', headerName: 'Email', width: 200 ,renderCell:(params)=>{
        return (
          <div className="productListItem">
        <img  className="productListImg" src={params.row.img} alt=""/>
        {params.row.name}
          </div>
        )
            }},
            { field: 'stock', headerName: 'Stock', width: 200 },
            {field: 'status',headerName: 'Status',width: 120,},
            { field: 'price', headerName: 'Price Volum', width: 160 },
            {field:"action",headerName:"Action",width:150,
            renderCell:(params)=>{
              return(
                <>
                <Link to={"/product/"+params.row.id}>
                  <button className="productListEdit">Edit</button>
                  </Link>
                  <DeleteIcon className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>
                </>
              )
            }
          }
          ];
          
    return(
        <div className="productList">
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
export default ProductList