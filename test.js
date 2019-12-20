function passwordChanger(password) 
{
  let result = ''
  let alphaca = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' // index 0-25 smol, index 26-52 BIG, index 53-62 nomer , 
  
  for (let i = password.length-1; i >= 0; i--)
  {
    for (let j = 0; j < alphaca.length; j++)
    {
      if (password[i] === alphaca[j])
      {
        if (password[i] === 'a' ||password[i] === 'i' ||password[i] === 'u' ||password[i] === 'e' ||password[i] === 'o')
        {
          result += alphaca[Math.ceil(Math.random() * (25 - 0)) + 0]
          j = alphaca.length
        }
        if (password[i] === '1' ||password[i] === '2' ||password[i] === '3' ||password[i] === '4' ||password[i] === '5' ||password[i] === '6' ||password[i] === '7' ||password[i] === '8' ||password[i] === '9' ||password[i] === '0')
        {
          result += alphaca[Math.ceil(Math.random() * (Math.max(alphaca.length-1) - 53))+ 53]
          j = alphaca.length
        }
        if (password[i] === 'A' ||password[i] === 'I' ||password[i] === 'U' ||password[i] === 'E' ||password[i] === 'O' )
        {
          result += alphaca[Math.ceil(Math.random() * (52 - 26))+ 26]
          j = alphaca.length
        }
        else
        {
          result += alphaca[Math.floor(Math.random() * (alphaca.length - 0)) + 0]
          j = alphaca.length
        }
      }
    }
  }

  return result
  // newPassword.value = result
  
}

console.log(passwordChanger('g00gl3'))