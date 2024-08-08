import axios from 'axios'
const url ='http://localhost:3000/Products'

export async function getdata()
{
   return await axios.get(url)
}
export async function deletedata(id)
{
   return await axios.delete(url+"/"+id)
}
export async function postdata(data)
{
    return await axios.post(url,data,{
        headers:{
            "Content-Type":'application/json'
        }
    })
}
export async function putdata(id,data)
{
    return await axios.put(url+"/"+id,data,{
        headers:{
            "Content-Type":'application/json'
        }
    })
}