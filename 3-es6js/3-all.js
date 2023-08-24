import { uploadPhoto,  createUser} from "./utils.js";

export default function handleProfileSignup() {
    const photo = uploadPhoto();
    const user = createUser();

    console.log(photo)
    console.log(user)
    Promise.all([photo, user]).then((vals) => {
        console.log(`${vals[0].body} ${vals[1].firstName} ${vals[1].lastName}`)
    })
}
