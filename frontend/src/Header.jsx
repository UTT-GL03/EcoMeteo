import Select from 'react-select';
import 'dayjs/locale/fr'
import './Header.css'

function Header({ cities, ville, cityChange, selectedDate }) {
    const options = cities?.map((city) => ({ value: city, label: city })) || [];

    const defaultValue = options.find((option) => option.value === ville);
    const handleChange = (selectedOption) => {
        cityChange(selectedOption.value);
    };

    const formattedDate = new Date(selectedDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });

    return (
        <header className="header-container">
            <div className="select-container">
                <Select
                    defaultValue={defaultValue}
                    onChange={handleChange}
                    options={options}
                    placeholder="Choisissez une ville"
                    className="select"
                />
            </div>
            <div className="logo-container">
                <h2>Éco Météo</h2>
            </div>
            <div className="info-container">
                <p className="city-name">{ville || 'Ville non sélectionnée'}</p>
                <p className="date">{formattedDate}</p>
            </div>
        </header>
    );
}

export default Header;
