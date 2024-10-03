import * as React from "react";
import {useState} from "react";
import {IUser, IUserMutation} from "../../types";

const roles =  [
    { value: '', label: 'Выберите роль' },
    { value: 'Пользователь', label: 'Пользователь' },
    { value: 'Администратор', label: 'Администратор' },
    { value: 'Редактор', label: 'Редактор' },
]

interface Props {
    addUser: (user: IUserMutation) => void;
}

const UserForm: React.FC<Props> = ({addUser}) => {
    const [newUser, setNewUser] = useState<IUserMutation>({
        name: '',
        email: '',
        active: false,
        role: '',
    });

    const changeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser((prev) => ({
            ...prev,
            active: e.target.checked,
        }));
    };

    const changeRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setNewUser(prevState => ({
            ...prevState,
            role: e.target.value,
        }));
    };


    const changeUser = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setNewUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (newUser.name.trim() === "" || newUser.email.trim() === "" || newUser.role === "") {
            alert("Пожалуйста, заполните все поля и выберите роль.");
        } else {
            addUser({ ...newUser, id: String(new Date()) });
            setNewUser({
                name: "",
                email: "",
                active: false,
                role: "",
            });
        }
    };

    return (
        <form  onSubmit={onSubmit} style={{maxWidth: '500px'}}>
            <div className="form-group mb-2">
                <label htmlFor="name">Введите имя:</label>
                <input
                    onChange={changeUser}
                    value={newUser.name}
                    id="name"
                    type="text"
                    name="name"
                    className="form-control"
                    required/>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="email">Введите email:</label>
                <input
                    onChange={changeUser}
                    value={newUser.email}
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    required/>
            </div>
            <div className="checkbox mb-2">
                <label className="form-check-label me-2" htmlFor="active">Активен</label>
                <input
                    onChange={changeCheckbox}
                    type="checkbox"
                    id="active"
                    checked={newUser.active}
                    className="form-check-input"
                />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="role">Роль:</label>
                <select
                    onChange={changeRole}
                    value={newUser.role}
                    id="role"
                    className="form-control"
                >
                    {roles.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                            disabled={option.value === ''}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <button className="btn btn-primary">Добавить</button>
        </form>
    );
};

export default UserForm;