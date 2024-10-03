import "./App.css";
import UserForm from "./components/UserForm/UserForm.tsx";
import Users from "./components/Users/Users.tsx";
import {useState} from "react";
import {IUser} from "./types";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    const addUser = (newUser: IUser) => {
        setUsers((prevUsers) =>
            [...prevUsers, newUser]);
    };

    return (
        <>
            <header className = 'bg-primary text-white p-3'>
                <h4>Приложение по управлению пользователями</h4>
            </header>
            <main className="container mt-3">
                <div className='row'>
                    <div className='col-6'>
                        <h3 className= 'mb-4'>Форма для заполнения</h3>
                        <UserForm addUser={addUser}/>
                    </div>
                    <div className='col-6'>
                        <h3 className='mb-4'>Пользователи</h3>
                        <Users users={users}/>
                    </div>
                </div>
            </main>
        </>
        )
};


export default App;
