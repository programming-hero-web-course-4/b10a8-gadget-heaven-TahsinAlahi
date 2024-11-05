function Feedback() {
  return (
    <main className="lg:max-w-screen-lg lg:mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Feedback</h1>
      <form className="lg:w-1/2 lg:mx-auto border border-gray-300 p-10 rounded-2xl shadow-xl">
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-bold mb-2">
            Feedback
          </label>
          <textarea className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button className="bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>
    </main>
  );
}

export default Feedback;
