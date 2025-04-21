const greet = name => `Hi ${name}`;
const name = "Akash";
const lucky = Math.floor(Math.random() * 100) + 1;
function App() {
  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>{greet(name)}</p>
      <p>Your lucky number is {lucky}</p>
    </>
  );
}
export default App;