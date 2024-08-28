const getData = async (endpoint: string) => {
  const response = await fetch(endpoint);

  return response.json();
}

export {getData};