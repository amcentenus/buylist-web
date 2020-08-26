import jwtDecode from 'jwt-decode';

const ls_Id = process.env.REACT_APP_LOCALSTORAGE_ID || '@buylist_web';
interface IUser {
  Id: string, Login: string, Name: string, Email: string, Token: string
}

function setUser(user: IUser): void {
  setUserToken(user.Token);
  setUserId(user.Id);
  setUserName(user.Name || user.Email);
}

function getUser(): Omit<Omit<IUser, 'Login'>, 'Email'> {
  const user = {
    Id: getUserId() || '',
    Name: getUserName() || '',
    Token: getUserToken() || '',
  }
  return user;
}

function removeUser(): void {
  localStorage.removeItem(`${ls_Id}-ID`);
  localStorage.removeItem(`${ls_Id}-NAME`);
  localStorage.removeItem(`${ls_Id}-TOKEN`);
}

function setUserId(Id: string): void {
  localStorage.setItem(`${ls_Id}-ID`, Id);
}
function getUserId(): string | null {
  return localStorage.getItem(`${ls_Id}-ID`);
}
function setUserName(userName: string): void {
  localStorage.setItem(`${ls_Id}-NAME`, userName);
}
function getUserName(): string | null {
  return localStorage.getItem(`${ls_Id}-NAME`);
}
function setUserToken(Token: string): void {
  localStorage.setItem(`${ls_Id}-TOKEN`, Token);
}
function getUserToken(): string | null {
  return localStorage.getItem(`${ls_Id}-TOKEN`);
}


function getSigned(): boolean {
  return getUserToken() !== null;
}

function getUserIdFromToken(): string {
  const token = getUserToken() || '';
  if (!token) {
    return (jwtDecode(token));
  } else { return ''; }
}

export {
  getSigned, getUserIdFromToken, getUserId, getUser, getUserToken, getUserName,
  setUser, setUserToken, setUserName,
  removeUser
}