import { useState } from "react";
import AvatarUpload from "../components/AvatarUpload";
import ProfileForm from "../components/ProfileForm";


function Profile() {
    const [progress, setProgress] = useState('getUpload');
    const [url, setImageURL] = useState(undefined);
    const [errorMessage, setErrorMessage ] = useState('');

    const onUrlChange = e => {
        setImageURL(e.target.value);
    };

    

    return (
        <div>
            <p>Create Your Profile</p>

            <form>
                <div>
                    <AvatarUpload />
                    <ProfileForm />
                </div>
            </form>
        </div>

    )
}

export default Profile;