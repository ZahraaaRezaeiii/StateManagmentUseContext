import { useContext } from 'react';
import {ChangeProfile} from '../components/ChangeProfile';
import { ProfileContext } from '../ProfileContext';



export const Profile = () => {
    const {username} = useContext(ProfileContext);
    return (
        <div>
            <p>This is Profile page of {username}</p>
            <ChangeProfile />
        </div>
    )
}
