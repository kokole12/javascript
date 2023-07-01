export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve({ status: 200, body: 'sucess' });
    } else {
      reject(new Error('This fake Api is not working correctly'));
    }
  });
}
