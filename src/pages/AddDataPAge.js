import NewPostForm from "../components/sure/NewPostForm";
import axios from "axios";



const AddData = () => {
    

    const addSureHandler = async (sureData) => {
        console.log(sureData)

        const formData = new FormData()
        formData.append('name', sureData.name)
        formData.append('address', sureData.address)
        formData.append('phone_number', sureData.phone_number)
        formData.append('description', sureData.description)
        formData.append('image', sureData.image)

        return await axios.post('http://localhost:8181/api/v1/sures', formData).then(r => {
            console.log(r.data)
        })

        // fetch('http://localhost:8181/api/v1/sures',
        //     {
        //         method: 'POST',
        //         body: JSON.stringify(formData),
        //         headers:{
        //             'Content-Type': 'application/json'
        //         }
        //     }
        //     );

    }

    return <section>
        <h1>Add a new sure</h1>
        <NewPostForm addSure={addSureHandler}/>
    </section>

}
export default AddData;