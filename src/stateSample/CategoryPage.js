import React, { useState } from 'react'
import { categoriesData } from '../data/categories'

function CategoryPage() {

    const [categories, setcategories] = useState(categoriesData);

    //Inputs states
    const [name, setname] = useState('');
    const [desc, setdescription] = useState('');

    const deleteCategory = (id) => {

        let filteredCategories = categories.filter(x => x.id !== id);
        setcategories([...filteredCategories]);

    }

    const add = () => {

        let randomGenerateId = Math.floor(Math.random() * 999999)

        let newCategory = {
            id: randomGenerateId,
            description:desc,
            name: name,
        }

        setcategories([...categories, newCategory])

    }

    return (<>
        <div>
        <div>
            <h1>Categories Length: {categories.length}</h1>
        </div>
            <div>
                <label>Name:</label>
                <input type='text' onChange={(e) => setname(e.target.value)} />
            </div>
            <div>
                <label>Description:</label>
                <input type='text' onChange={(e) => setdescription(e.target.value)} />
            </div>
            <div>
                <button onClick={() => add()}>Add</button>
            </div>
        </div>
        <div>
            <button onClick={() => setcategories([])}>Remove All</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    categories && categories.map((item, index) => {

                        return <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td onClick={() => deleteCategory(item.id)} style={{ color: 'tomato', cursor: 'pointer' }}>Delete</td>
                        </tr>

                    })
                }

            </tbody>

        </table>

    </>
    )
}

export default CategoryPage