const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1 & 2
function getAllCookies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cookies);
    }, 1000);
  });
}

// Progression 3 & 4
function createCookies(cookie, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        cookie &&
        typeof cookie === 'object' &&
        time >= 0 &&
        typeof time === 'number'
      ) {
        cookies.push(cookie);
        resolve('Cookie created successfully.');
      } else {
        reject('Invalid parameters.');
      }
    }, time);
  });
}

// Progression 5: Error handling and adding a new cookie
async function handleCookieCreation() {
  try {
    const newCookieMessage = await createCookies(newCookie, 2000);
    console.log(newCookieMessage);
    const allCookies = await getAllCookies();
    console.log('All cookies:', allCookies);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Progression 7: Calling the async function
async function main() {
  await handleCookieCreation();
}

// Call the main async function
main();
