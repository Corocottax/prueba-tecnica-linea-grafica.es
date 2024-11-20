export const API = async ({ endpoint, method = "GET", body, auth }) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (auth) {
    headers["Authorization"] = auth;
  }

  const response = await fetch(
    "https://training.proyectos-lineagrafica.com" + endpoint,
    {
      method,
      body: JSON.stringify(body),
      headers,
    }
  );

  const res = await response.json();

  console.log(res);
  

  if (res.result === 403) {
    return { error: res.message };
  } else {
    return { response: res };
  }
};
