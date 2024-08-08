export default function Table(props)
{
  console.log(props)
   return(
    <div>
        <table className="table">
             <thead>
                   <tr>
                       <th>ID</th>
                       <th>Product Name</th>
                       <th>Price</th>
                       <th>Product Image</th>
                       <th>Category</th>
                       <th>Operations</th>
                   </tr>
                </thead>
                <tbody>
                {
                    props.product.map((e)=>
                    (
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.price}</td>
                            <td>
                                <img className="round" src={e.image} alt="noimage" width="100" height="100"/>
                            </td>
                            <td>{e.category}</td>
                            <td>
                                <button className="btn btn-primary m-3 " onClick={()=>{props.edit(e)}}>Edit</button>
                                <button className="btn btn-danger "onClick={()=>{props.delete(e.id)}
                                }>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
          
        </table>
    </div>
   )
}