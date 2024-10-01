const App = () => {
  return (
    <div className="mt-10 mx-auto w-[80%] p-5 bg-red-300 rounded text-center">
            <h1 className="text-3xl">React Application</h1>
            <h2 className="text-xl">{import.meta.env.VITE_API_KEY}</h2>
        </div>
  );
};
export default App;
