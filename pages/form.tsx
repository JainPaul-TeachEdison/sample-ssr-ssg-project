import React, { useState } from "react"
import { useRouter } from "next/router";

const Form = () => {

const router=useRouter();

  const [formData, setFormData] = useState({
    name:'',
    email:'',
  });

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value})
  };

  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()
    router.push('/')
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold">Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
