const ENV = "dev";

exports.get_recipes = async () => {
  console.log("getting recipes");

  // set base to be local server if running locally, otherwise use production server
  const base =
    ENV === "dev"
      ? "http://localhost:3001"
      : "https://us-west-2.aws.data.mongodb-api.com";

  console.log("getting recipes");
  const url = `${base}/app/data-wasdn/endpoint/data/v1/action/find`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      email: "huntermm17@gmail.com",
      password: "bytesite",
    },

    body: JSON.stringify({
      dataSource: "byte-site-cluster",
      database: "recipes",
      collection: "recipe-collection",
    }),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  const result = await response.json();
  // console.log(result.documents);
  return result.documents;
};
