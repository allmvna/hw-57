import {IUser} from "../../types";
import React from "react";

interface Props {
    user: IUser;
}

const UserItem: React.FC<Props> = ({user}) => {
    const imageUrl = 'https://cdn-icons-png.flaticon.com/128/15761/15761476.png';

    const imageStyle = {
        background: `url(${imageUrl}) center center no-repeat`,
    };

    return (
        <div className='card mb-3 border-dark'>
            <div className='row g-0 justify-content-between'>
                <div className='col-4' style={imageStyle}/>
                <div className="col-8 p-3">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text m-0">
                        <strong>Email:</strong> {user.email}
                    </p>
                    <p className="card-text m-0">
                        <strong>Активен:</strong> {user.active ? 'Да' : 'Нет'}
                    </p>
                    <p className="card-text m-0">
                        <strong>Роль:</strong> {user.role}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserItem;