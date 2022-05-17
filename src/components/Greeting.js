export const Greeting = () => {
  return (
    <div>
      <h1>Hello {myName}</h1>
      <p>This is a simple react component</p>
    </div>
  );
};

const myName = "Ilona";

export function Goodbye() {
  return (
    <div>
      <h1>Goodbye {myName}</h1>
      <p>This is a simple react component</p>
    </div>
  );
}
