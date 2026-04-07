//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Aaliyah';
  let age = 29;
  let hobbies = ['Crocheting, Painting, Reading, Learning'];
  //add variables here
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hello! My name is {name} and I am {age} years old.
      </p>

      <h2>My Hobbies</h2>

      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
