import { useState, useEffect } from "react";

export function Component() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  // useEffect(() => {
  //   console.log("name changed", name);
  // }, [name]);

  useEffect(() => {
    console.log("hi");

    return () => {
      console.log("Bye");
    };
  }, []);

  useEffect(() => {
    document.title = name;

    const timeOut = setTimeout(() => {
      console.log(`my name is ${name}`);
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [name]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <br />
      <br />
      My name is {name} and age is {age} year old.
    </div>
  );
}
