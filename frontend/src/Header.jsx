import Select from 'react-select';
import 'dayjs/locale/fr'
import data from './assets/sample_data.json'
// import { useState } from 'react';



function Header({ ville, cityChange }) {

    const options = data.meteo.map((item) => item.city)
    .map((city) => (
        { value: city, label: city }
    ))

    const defaultValue = options.find(city => city.value === city);
    const handleChange = (selectedOption) => {
        cityChange(selectedOption.value); 
      };

    return (
        <main className="container"  style={{ display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <Select
            defaultvalue={defaultValue}
            onChange={handleChange}
            options={options} 
            placeholder="Choisissez une ville"
            />
            <h2>Éco Météo</h2>
            <p>{ville}</p>
        </main>
    )
}

export default Header