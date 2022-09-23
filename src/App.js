import './App.css';

// grid - сетка.
// Грид представляет собой пересекающийся набор горизонтальных и вертикальных линий, образующих колонки и строки.
// здесь задаем стиль для каталога, футера и меню (чтобы не один под другим, а колонками)
const catalogStyle = {display: 'grid', gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'};
const footerStyle = {display: 'grid', gridTemplate: 'repeat(2, 1fr) / repeat(2, 1fr)'}
const menuStyle = {display: 'grid', gridTemplateColumns: '0.8fr 1fr 1.5fr 1.5fr 2fr 2fr'}

function App() {
    const arrMenu = ['Home', 'Air tickets', 'Accommodation', 'Leisure options', 'Car rental'];
    const footerMenu = ['About us', 'Contact us', 'Policy', 'Terms'];
    const allProperties = [
        {
            id: '1',
            name: 'Hilton',
            description: 'beach front',
            price: 150,
            type: 'hotel',
        },
        {
            id: '2',
            name: 'Redisson',
            description: 'resort and SPA',
            price: 200,
            type: 'hotel',
        },
        {
            id: '3',
            name: 'Sheraton',
            description: 'city view',
            price: 220,
            type: 'hotel',
        },
        {
            id: '4',
            name: 'Dream house',
            description: 'sea view',
            price: 250,
            type: 'Bungalow',
        },
        {
            id: '5',
            name: 'Eden hills residence',
            description: 'garden view',
            price: 320,
            type: 'Bungalow',
        },
    ];
    const companyAddress = {
        zip: '90210',
        email: 'booking@booking.com',
        address: '124 West end blvd Los Angeles',
        phoneNumber: '+19995553311'
    }

    // вариант, что функция может возвращать html
    const renderCallOrder = () => {
        return <div>
            <input type="number" placeholder='input your phone number and we`ll call you back'/>
            <button>Order a call</button>
        </div>
    }
    return (
        <div>
            <h1> Booking app </h1>
            <div style={menuStyle}>
                {
                    arrMenu.map(el => <div>{el}</div>)
                }
            </div>
            <hr/>
            <ol>
                {
                    arrMenu.map(el => <li>{el}</li>)
                }
            </ol>
            <hr/>
            <h2>Start your journey</h2>
            <div style={catalogStyle}>
                {
                    allProperties.map(el => <div>
                        <h3>{el.name}</h3>
                        <p>{el.description}</p>
                        <p>Price: <b>{el.price}</b></p>
                        <button>BOOK</button>
                    </div>)
                }
            </div>
            {renderCallOrder()}
            <hr/>
            <div style={footerStyle}>
                <div>
                    <p>{companyAddress.address}</p>
                    <p>{companyAddress.zip}</p>
                    <p>{companyAddress.email}</p>
                    <p>{companyAddress.phoneNumber}</p>
                </div>
                <div>
                    <br/>
                    {footerMenu.map(el => <li>{el}</li>)}
                </div>
            </div>
        </div>
    );
}

export default App;
