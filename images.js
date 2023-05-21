
fetch('http://localhost:5503/')
  .then(response => response.json())
  .then(data => {
    // Handle the response data
      console.log("Hello!");
      console.log(data);
    for (let i = 1; i < data.length + 1; i++){
      if (i != 3) {
        let element = document.getElementById(`listing${i}`);
        element.style.backgroundImage = `url(${data[i - 1]})`;
        element.style.backgroundSize = "cover";
        console.log(i);
        console.log(data[i]);
      }
      };
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
// fetch('/')
//   .then(response => response.json())
//   .then(data => {
//       console.log(data);
//       console.log("Hello1");
//       const element = document.getElementById('listing1');
//       console.log("Hello2");
//       const x = data[0]; 
//       console.log("Hello3");
//       console.log(url(x));
//     element.style.backgroundImage = `url(x)`;
//     element.style.backgroundImage()
//   })
//   .catch(error => {
//     console.error('Error fetching images:', error);
//   });

