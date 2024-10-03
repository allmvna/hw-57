import "./App.css";
import UserForm from "./components/UserForm/UserForm.tsx";
import Users from "./components/Users/Users.tsx";

const App = () =>
    <>
        <header className = 'bg-primary text-white p-3'>
            <h4>Приложение по управлению пользователями</h4>
        </header>
        <main className="container mt-3">
            <div className='row'>
                <div className='col-4'>
                    <UserForm/>
                </div>
                <div className='col-4'>
                    <Users/>
                </div>
            </div>
        </main>

    </>;

export default App;
