import { useEffect, useState } from 'react'
import { deletedata, getdata, postdata, putdata } from "./API"
import Form from './Form'
import Table from './Table'
function App()
{
  const[product,setproduct]=useState([])
  const[form,setform]=useState(false)
  const[edit,setedit]=useState(false)
  const[intial,setinitial]=useState({
    name:"",
    price:"",
    image:"",
    category:""
  })
  useEffect(()=>
  {
    getProduct()
  },[])
  /// Reading Products
  let getProduct=async()=>
  {
    let res=await getdata()
    setproduct(res.data)
  }
  // Deleting a Product
  let delProduct=async(id)=>
  {
    await deletedata(id)
    getProduct()
  }
  // Creating a Product
  let addProduct= async(product)=>
    { 
      let data={
        name:product.name,
        price:product.price,
        image:product.image,
        category:product.category

      }
      if(edit)
        await putdata(product.id,data)
      else
        await postdata(data)
        getProduct()
        setform(false)
    }
  // Updating a Product
  let updateproduct= async(data)=>
    {
      setinitial(data) 
      setform(true)
      setedit(true)
    }
  let showform=()=>
  {
    setform(true)
    setinitial({
      name:"",
      price:"",
      image:"",
      category:""
    })
  }
  let cancelform=()=>
  {
    setform(false)
  }
  return(
    <div className="m-2 w-75">
       <h1 className="text-primary text-center">CRUD Operations</h1>
       <button className="btn btn-success float-end" onClick={
        ()=>showform()
       }>Add Product</button>
       <Table product={product} delete={delProduct} edit={updateproduct}/>
       {(form)&&<Form cancel={cancelform} data={intial} add={addProduct}/>}
    </div>
  )


}
export default App