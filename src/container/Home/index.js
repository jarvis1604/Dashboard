import React from 'react'
import { Jumbotron} from 'react-bootstrap'
import Layout from '../../components/Layout';
import AccDropdown from './accordions';
import bg_image from './../../images/background.jpg';
import './../../App.css';

const Home = () => {
    return (
        <div>
            <Layout>
                <AccDropdown/>
            </Layout>
        </div>
    )
}

export default Home;
