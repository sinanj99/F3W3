function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}
function apiFacade() {
  const allCryptos = () => {
    return fetch("http://localhost:8080/jpareststarter/api/crypto").then(
      handleHttpErrors
    );
  };
  return {
    allCryptos
  };
}
export default apiFacade;
