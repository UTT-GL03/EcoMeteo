import Select from 'react-select';
import 'dayjs/locale/fr'
import data from './assets/sample_data.json'
import { useState } from 'react';



function Header() {
    const [selectedCity, setSelectedCity] = useState('Paris');

    const options = data.meteo.map((item) => item.city)
    .map((city) => (
        { value: city, label: city }
    ))

    const defaultValue = options.find(city => city.value === selectedCity);
    console.log("defaultValue", defaultValue)
    console.log("selectedCity", selectedCity)
    const handleChange = (selectedOption) => {
        setSelectedCity(selectedOption.value);
      };

    return (
        <main className="container-fluid"  style={{ display: "flex", alignItems: "center"}}>
            {/* <header> */}
            <Select
              defaultvalue={defaultValue}
              onChange={handleChange}
              options={options} 
              placeholder="Choisissez une ville"
              />
            <h2>Éco Météo</h2>
            <p>{selectedCity}</p>
            {/* </header> */}
        </main>
    )
}

export default Header