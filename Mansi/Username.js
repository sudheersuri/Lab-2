Q3. Simple validation of a username with regex

Solution:

function validateUsr(username) {
  if (username.length < 4 || username.length > 16)
  {
    return false;
  }
  else
  {
   return /^([a-z0-9_])+$/.test(username);
  }
}