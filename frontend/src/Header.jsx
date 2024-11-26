import Select from 'react-select';
import 'dayjs/locale/fr'

function Header({ cities, ville, cityChange, selectedDate }) {
    let options;

    if (cities && cities[0]) {
        options = cities.map((city) => ({ value: city, label: city }))
    }    

    const defaultValue = options && options.find(city => city.value === city);
    const handleChange = (selectedOption) => {
        cityChange(selectedOption.value); 
      };

    const formattedDate = new Date(selectedDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });


    return (
        <main className="container"  style={{ display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <Select
            defaultvalue={defaultValue}
            onChange={handleChange}
            options={options && options} 
            placeholder="Choisissez une ville"
            />
            <h2>Éco Météo</h2>
            <div>
                <p>{ville}</p>
                <p>{formattedDate}</p>
            </div>
        </main>
    )
}

export default Header