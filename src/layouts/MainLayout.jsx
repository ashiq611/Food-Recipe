
import Footer from '../components/Footer';
import Nav from '../components/nav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;