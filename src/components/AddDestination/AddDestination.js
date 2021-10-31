import React from 'react';
import { useForm } from "react-hook-form";
import './AddDestination.css';

const AddDestination = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://sheltered-tundra-53360.herokuapp.com/destinations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('New Destination Added Successfully');
                    reset()
                }
            })
    }

    return (
        <div className="my-5 pt-5">
            <h2>Please Add a New Destination</h2>
            <form className="add-form mt-5 w-100" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Destination" {...register("title", { required: true })} />
                <br />
                <input className="my-3" placeholder="Duration" {...register("duration", { required: true })} />
                <br />
                <input className="mb-3" placeholder="Price" {...register("price", { required: true })} />
                <br />
                <input className="mb-3" placeholder="Rating" {...register("rating", { required: true })} />
                <br />
                <input className="mb-3" placeholder="Image URL" {...register("img", { required: true })} />
                <br />
                <input className="btn btn-primary mt-3" type="submit" />
            </form>
        </div>
    );
};

export default AddDestination;