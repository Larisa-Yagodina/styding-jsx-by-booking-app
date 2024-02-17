import './App.css';
import apartment from './images/apartment.jpeg';
import Header from "./components/Header";
import Menu from "./components/headerMenu/Menu";
import Catalog from "./components/catalog/Catalog";
import Footer from "./components/footer/Footer";

const serverData = [
    {
        id: '0',
        img: apartment,
        name: 'Fairmont',
        description: 'stylish city resort',
        price: 450,
        city: 'Manhattan',
        type: 'Hotel',
    },
    {
        id: '1',
        img: 'https://i0.wp.com/www.islandfeversisters.com/wp-content/uploads/2018/05/ACS_0007.jpg?w=960&ssl=1',
        name: 'Hilton',
        description: 'beach front',
        price: 150,
        city: 'Los Angeles',
        type: 'Hotel',
    },
    {
        id: '2',
        img: 'https://assets.anantara.com/image/upload/q_auto,f_auto%2Cc_limit%2Cw_1045/media/minor/anantara/images/anantara-dhigu-maldives-resort/spa/anantara_dhigu_spa_double_treatment_room_944x510.jpg',
        name: 'Radisson',
        description: 'Resort and SPA',
        price: 200,
        city: 'New York',
        type: 'Hotel',
    },
    {
        id: '3',
        img: 'https://www.rochesterplaza.com/wp-content/uploads/2017/10/NY-hotel-1228x691.jpg',
        name: 'Sheraton',
        description: 'Best city view',
        price: 220,
        city: 'San Francisco',
        type: 'Hotel',
    },
    {
        id: '4',
        img: 'https://www.home-designing.com/wp-content/uploads/2014/06/29-luxury-sea-view-house.jpg',
        name: 'Dream house',
        description: 'Sea view',
        price: 250,
        city: 'Miami',
        type: 'Bungalow',
    },
    {
        id: '5',
        img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/132749724.jpg?k=685ee06d642d187cece5a8cdd9fe96f3b36ae973295ec6e94d31fd64b9c4afd3&o=&hp=1',
        name: 'Eden hills residence',
        description: 'Garden view',
        price: 320,
        city: 'Clearwater beach',
        type: 'Bungalow',
    },
    {
        id: '6',
        img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/353151652.jpg?k=e9b535d9c5c17babab7e45b7e62faba62d06c621b41bd6cc3126cd0aee80cb16&o=&hp=1',
        name: 'Motel 6',
        description: 'cosy and convenient',
        price: 60,
        city: 'Thousand oaks',
        type: 'Bed and breakfast',
    },
    {
        id: '7',
        img: 'https://cdn-img.readytotrip.com/t/1024x768/content/e9/cc/e9cc91a12a3622a606b4cf68a90ab5dcf552713d.jpeg',
        name: 'Howard Jonson',
        description: 'nice and romantic',
        price: 90,
        city: 'Sedona',
        type: 'Bed and breakfast',
    },
    {
        id: '8',
        img: 'https://cdn-clkao.nitrocdn.com/FAgYdlQakZCMXfQcyaKsDpDIGpUettyM/assets/images/optimized/rev-493f25d/jorgefontan.wpenginepowered.com/wp-content/uploads/2020/04/High-End-Apartment-Renovation-NYC.jpg',
        name: 'Gorgeous renovated apartment',
        description: 'Breakfast included',
        price: 590,
        city: 'Chicago',
        type: 'Apartments',
    },
    {
        id: '9',
        img: 'https://media.architecturaldigest.com/photos/60897ad53d446d6023247999/16:9/w_2240,c_limit/viper2.jpg',
        name: '4 bedroom apartment',
        description: 'Home away from home',
        price: 500,
        city: 'New York',
        type: 'Apartments',
    },
]

function App() {
    const appTitle = 'Booking app';
    const appMenu = ['Home', 'Air tickets', 'Accommodation', 'Leisure options', 'Car rental'];
    const footerMenu = ['About us', 'Contact us', 'Policy', 'Terms'];
    const accommodation = serverData;
    const companyAddress = {
        zip: '90210',
        email: 'booking@booking.com',
        address: '124 West end blvd Los Angeles',
        phoneNumber: '+19995553311'
    }

    const renderCallOrder = () => {
        return (
            <div style={{textAlign: 'center', borderTop: "1px solid grey", borderBottom: "1px solid grey", padding: '10px'}}>
                <input
                    style={{padding: '10px', width: '40%', margin: '10px'}}
                    type="number" placeholder='input your phone number and we`ll call you back'/>
                <button
                    style={{padding: '10px'}}
                >Order a call
                </button>
            </div>
        )
    }

    return (
        <div>

            <Header appTitle={appTitle}/>
            <div style={{padding: '0 35px', backgroundColor: '#F5F5F5'}}>
                <Menu menu={appMenu}/>
                <Catalog accommodation={accommodation}/>
            </div>
            {renderCallOrder()}
            <Footer companyAddress={companyAddress} footerMenu={footerMenu}/>
        </div>
    )
        ;
}

export default App;
