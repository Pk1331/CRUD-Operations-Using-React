import { useState } from "react";

export default function Form(props) {  
    const [product, setProduct] = useState(props.data);
    const[submit,setsubmit]=useState(false)
    function changeFormData(event) {
        const { name, value, type } = event.target;

        if (type === "file") {
            const file = event.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setProduct({ ...product, [name]: imageUrl });
        } else {
            setProduct({ ...product, [name]: value });
        }
    }

    return (
        <div className="form-overlay">
            <form>
                <div className="form-group mb-2">
                    <label className="form-label">Product Name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        placeholder="Enter the Product Name" 
                        onChange={changeFormData} 
                        value={product.name} 
                    />
                    {submit && product.name==="" && <span className="text-danger">Please provide the Product name</span>}
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Product Price:</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="price" 
                        placeholder="Enter the Product Price" 
                        onChange={changeFormData} 
                        value={product.price} 
                    />
                    {submit && product.price==="" && <span className="text-danger">Please provide the Product Price</span>}
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Product Image:</label>
                    <input 
                        type="file" 
                        className="form-control" 
                        name="image" 
                        onChange={changeFormData} 
                    />
                    {submit && product.image==="" && <span className="text-danger">Please choose the file</span>}
                </div>
                {product.image && (
                    <div className="form-group mb-2">
                        <img src={product.image} alt="Selected Product" width="100" height="100" />
                    </div>
                )}
                <div className="form-group mb-2">
                    <label className="form-label">Category:</label>
                    <select 
                        className="form-control" 
                        name="category" 
                        value={product.category} 
                        onChange={changeFormData}
                    >
                        <option value='-1'></option>
                        <option value={"Mobiles"}>Mobiles</option>
                        <option value={"Laptops"}>Laptops</option>
                        <option value={"Televisions"}>Televisions</option>
                        <option value={"Appliances"}>Appliances</option>
                    </select>
                    {submit && product.category==="" && <span className="text-danger">Please select the category</span>}
                </div>
                <button 
                    className="btn btn-success float-end" 
                    onClick={(e) => { 
                        setsubmit(true)
                        e.preventDefault();
                        if(!!product.name && !!product.price && !!product.image && !!product.category)
                            props.add(product)
                    }}
                >
                    Send
                </button>
                <button 
                    className="btn btn-danger float-end" 
                    onClick={(e) => { 
                        e.preventDefault();
                        props.cancel(); 
                    }}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
}
