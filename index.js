function handleLoginSubmit(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log('Login Email:', email);
  console.log('Login Password:', password);

}

function handleRegisterSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log('Register Name:', name);
  console.log('Register Email:', email);
  console.log('Register Password:', password);

}

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', handleLoginSubmit);

const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', handleRegisterSubmit);
