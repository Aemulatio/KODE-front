import React from 'react';
import UserItem from "./UserItem";

const UserList = ({users}) => {
    const sortItems = (a, b) => {
        return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0)
    }

    return (
        <>
            {
                users.sort(sortItems).map(user => (
                    <UserItem user={user} key={user.id}/>
                ))
            }
        </>
    );
};

export default UserList;