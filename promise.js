const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };
// Progression 1
function getAllCookies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cookies);
    }, 1000);
  });
}

// Progression 3 & 4
function createCookie(newCookie) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (newCookie && typeof newCookie === 'object') {
        cookies.push(newCookie);
        resolve('Cookie created successfully.');
      } else {
        reject('Invalid cookie.');
      }
    }, 2000);
  });
}

// Progression 6
function handleCookieOperations() {
  createCookie({ name: 'Biscotti Cookies' })
    .then((message) => {
      console.log(message);
      return getAllCookies(); // Get all cookies after creating a new one
    })
    .then((cookies) => {
      console.log('All cookies:', cookies);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Call the function to handle cookie operations
handleCookieOperations();
