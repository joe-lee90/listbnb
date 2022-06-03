import React, {useState} from 'react'
import './AddListingPage.css';

// AddListingPage is a submission form for creating a new listing
export default function AddListingPage() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    image: "",
    price: 0,
    description: ""
  })

  const handleChange = (e) => {
    const {name,  value} = e.target
    setFormData((formData) => ({...formData, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(formData)
    };

    fetch("http://localhost:4000/listing", configObj)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
    })
};

  return (
    <div className="addListingPage">
        <section>
          <form className="form" autoComplete="off" onSubmit={handleSubmit}>
            <h2 className="addListingTitle">Add a Listing</h2>
            <label>Name: </label>
            <input type="text" name="name" onChange={handleChange} value={formData.name}/>
            <br></br>
            <label>Address: </label>
            <input type="text" name="address" onChange={handleChange} value={formData.address}/>
            <br></br>
            <label>Image: </label>
            <input type="text" name="image" onChange={handleChange} value={formData.image}/>
            <br></br>
            <label>Price: </label>
            <input type="number" name="price" onChange={handleChange} value={formData.price}/>
            <br></br>
            <label>Description: </label>
            <input type="text" name="description" onChange={handleChange} value={formData.description}/>
            <br></br>
            <input type="submit" value="Submit" />
          </form>
        </section>
    </div>
  )
}
