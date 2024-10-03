import {IUser} from "../../types";
import React from "react";
import UserItem from "./UserItem.tsx";

interface Props {
    users: IUser[];
}

const Users: React.FC<Props> = ({users}) => {
    if (users.length === 0) {
        return <p className="text-center">Список пуст.</p>;
    }

    return (
        <>
            {users.map((user) => (
                <UserItem key={user.id} user={user}/>
            ))}
        </>
    );
};

export default Users;