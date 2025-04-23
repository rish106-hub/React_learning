import { useState } from 'react';
function App() {
  const [isMember, setIsMember] = useState(false);
  return (
    <>
      <h1>Welcome {isMember ? 'Member' : 'Guest'} 👋</h1>
      {isMember ? (
        <button onClick={() => setIsMember(false)}>Log out</button>
      ) : (
        <button onClick={() => setIsMember(true)}>Join us</button>
      )}
    </>
  );
}
export default App;
