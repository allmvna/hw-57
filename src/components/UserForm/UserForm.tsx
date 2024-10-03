import * as React from "react";
import {useState} from "react";

const options =  [
    { value: '', label: 'Выберите роль' },
    { value: 'user', label: 'Пользователь' },
    { value: 'admin', label: 'Администратор' },
    { value: 'editor', label: 'Редактор' },
]

const UserForm: React.FC<IUser> = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <form style={{ maxWidth: '500px'}}>
            <div className="form-group mb-2">
                <label htmlFor="name">Введите имя:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-control"
                    required/>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="email">Введите email:</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    required/>
            </div>
            <div className="checkbox mb-2">
                <label className="form-check-label me-2" htmlFor="isActive">Активен</label>
                <input
                    type="checkbox"
                    id="isActive"
                    checked={isActive}
                    className="form-check-input"
                />
            </div>
            <div className="form-group mb-2">
                <label htmlFor= 'role'>
                <select  className="form-control" defaultValue="">
                        {options.map((option, index) => (
                            <option
                                key={option.value}
                                value={option.value}
                                disabled={index === 0} >
                                {option.label}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <button className="btn btn-primary">Добавить</button>
        </form>
    );
};

export default UserForm;