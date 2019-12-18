fetch('http://localhost:4567/books.json')
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.text())
  .then(body => {
    console.log("The body of the response from the fetch call:");
    console.log(body);

    let bodyParsed = JSON.parse(body);
    console.log("The same body in a much more readable format:");
    console.log(bodyParsed);
    // your code here

    const ul = document.getElementById("books");
    // hannah's method:
    // for (let i = 0; i < bodyParsed["books"].length; i++) {
    //   let li = document.createElement("li")
    //
    //   ul.appendChild(li)
    //   li.innerHTML = bodyParsed['books'][i].name
    // }
    bodyParsed.books.forEach(book => {
      ul.innerHTML += (`<li>${book.name}</li>`)
    });

  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
