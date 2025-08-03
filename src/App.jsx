function App() {
  const containerStyles = {
    margin: "50px auto",
    width: "50%",
    textAlign: "center",
  };
  const headingStyles = {
    margin: "0px",
  };

  return (
    <div style={containerStyles}>
      <h2 style={headingStyles}>Codize</h2>
      <div>Codize - Your Coding Memory Vault</div>
      <p>Codize is a clean, modern, and minimal tool designed to help you document, revise, and retain your DSA journey effectively. Whether you're solving problems, tracking concepts, or reflecting on approaches, Codize keeps everything organized in one place and helps you master coding through structured revision and clear documentation.</p>
    </div>
  );
}

export default App;
