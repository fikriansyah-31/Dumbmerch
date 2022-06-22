import React from 'react'

import Navbar from '../components/Navbar'
// import { products } from '../components/datadummy/Products'

    const AddProduct = () => {
      // const navigate = useNavigate()
        // const params = useParams() // mengembalikan objek pasangan kunci/nilai parameter URL
        // const index = params.id - 1 // karena index array dimulai dari 0
  return (
    <>
    <Navbar />
    <div className="container">
    <form className="mt-3">
    <h5 className="text-start mb-4">Add Product</h5>
    <div class="mb-3">
    <input class="form-control bg-transparent text-white border-0" type="file" />
    </div>
    <div className="input-group mb-3">
    <input type="text" placeholder="Nama Product" className="form-control bg-var-dark text-white border-form" />
    </div>
    <div className="input-group mb-3">
    <textarea className="form-control bg-var-dark text-white border-form" placeholder="Description" name="" id="" rows="5"></textarea>
    </div>
    
    <div className="input-group mb-3">
    <input type="text" placeholder="Price" className="form-control bg-var-dark text-white border-form" />
    </div>
    <div className="input-group mb-3">
    <input type="text" placeholder="Stock" className="form-control bg-var-dark text-white border-form" />
    </div>
    
    <button className="btn bg-var-green text-white fw-bold container mt-3">Save</button>
    </form>
    </div>
    </>
    )
  }

export default AddProduct