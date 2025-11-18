import React from "react";

function Form() {
  return (
    <form
      action={(formData) => {
        const email = formData.get("email");
        const password = formData.get("password");
        const description = formData.get("description");
        const status = formData.get("status");
        const skills= formData.getAll("skill");

        console.log({ email, password, description, status,skills });
      }}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@gmail.com"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="font-medium">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="******"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="description" className="font-medium">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Write your opinion here"
          rows="4"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <fieldset className="border-2 p-4 rounded-lg">
        <legend className="font-medium">Employment Status</legend>

        <label className="flex items-center gap-2 mt-2">
          <input type="radio" name="status" value="unemployed" />
          Unemployed
        </label>

        <label className="flex items-center gap-2 mt-2">
          <input type="radio" name="status" value="employed" />
          Employed
        </label>

        <label className="flex items-center gap-2 mt-2">
          <input type="radio" name="status" value="student" />
          Student
        </label>
      </fieldset>
       <fieldset className="border-2 p-4 rounded-lg">
        <legend className="font-medium">Skills</legend>

        <label className="flex items-center gap-2 mt-2">
          <input type="checkbox" name="skill" value="HTML" />
          HTML
        </label>

        <label className="flex items-center gap-2 mt-2">
          <input type="checkbox" name="skill" value="CSS" />
          CSS
        </label>

        <label className="flex items-center gap-2 mt-2">
          <input type="checkbox" name="skill" value="JS" />
          JS
        </label>
      </fieldset>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
