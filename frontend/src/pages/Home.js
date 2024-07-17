import React from 'react';

function Home() {
  // useEffect(() => {
  //   axios.get('http://localhost:8000/api/home/')
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
      <a href="/login">Login</a>
    </div>
  );
}

export default Home;