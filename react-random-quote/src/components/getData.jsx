// fetch data from api endpoint
export const getData = async (url) => {
  const res = await fetch(url);
  return res.ok ? (await res.json()) : Promise.reject();
};

