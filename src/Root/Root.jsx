import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-3xl">Root File</h1>
        <Outlet></Outlet>
        </div>
    );
};

export default Root;