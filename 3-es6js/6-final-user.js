import uploadPhoto from "./5-photo-reject.js";
import signUpUser from "./4-user-promise.js";

export default function handleProfileSignup(firstName,
    lastName,
    filename) {
        const signuserPromise = signUpUser(firstName, lastName);
        const uploadPhotoPromise = uploadPhoto(filename)

        Promise.allSettled([signuserPromise, uploadPhotoPromise])
        .then((results) => {
            results.forEach(result => {
                if (result.status == 'fulfilled') {
                    result.push({ status: element.status, value: element.value });
                } else {
                    result.push({ status: element.status, value: `${element.reason}` });
                }
            });
        return result;
        })
    }
