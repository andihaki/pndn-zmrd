async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      // Authorization:
      //   "Bearer ...",
    },
  };

  const response = fetch("https://pandooin.com/api/zamrood/article", options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

export default async function getArticles() {
  const data = await getData();
  return data;
}
