import justineProfile from "/public/JustineLapura/profile.jpg"
import jethroProfile from "/public/JustineLapura/jethroProfile.jpg"
import { v4 as uuidv4 } from 'uuid';

export const developers = [
    {
        id: uuidv4(),
        name: "Justine Lapura",
        img: justineProfile
    },
    {
        id: uuidv4(),
        name: "Jethro Lapura",
        img: jethroProfile
    }
]