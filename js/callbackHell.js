function getProduct(callback) {
  setTimeout(() => {
    const product = "my product";
    console.log("Here is", product);
    callback(product);
  }, 2000);
}

getProduct((product) => {
  console.log("Got the", product);
});
