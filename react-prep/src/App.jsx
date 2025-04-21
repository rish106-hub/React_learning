const lucky = Math.floor(Math.random() * 10) + 1; // 1..10
function App() {
  return <p>Your lucky number is {lucky}</p>;
}
export default App;