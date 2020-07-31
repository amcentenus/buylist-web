
const localStorage_Id = process.env.REACT_APP_LOCALSTORAGE_ID || '@buylist_web';

function setUserToken(Token: string): void {
  localStorage.setItem(localStorage_Id, Token);
}

function getUserToken(): string | null {
  return localStorage.getItem(localStorage_Id);
}

function getSigned(): boolean {
  // console.log(getUserToken())
  return getUserToken() !== null;
}

export { setUserToken, getSigned }