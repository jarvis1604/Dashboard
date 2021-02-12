import React from 'react'
import { Jumbotron} from 'react-bootstrap'
import Layout from '../../components/Layout';
import AccDropdown from './accordions';

const Home = () => {
    return (
        <div>
            <Layout>
                <Jumbotron style={{margin: '5rem', background: '#fff'}} className="text-center">
                    <h1>Admin Dashboard</h1>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                </Jumbotron>


                <AccDropdown/>


                
            </Layout>
        </div>
    )
}

export default Home;
