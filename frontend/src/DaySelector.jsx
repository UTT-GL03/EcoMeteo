import 'dayjs/locale/fr'
import data from './assets/sample_data.json'



function DaySelector({date ,dateChange}) {

    return (
        <div className="grid">
            <button value={"2024-10-08 00:00"} onClick={() => dateChange("2024-10-08 00:00")}>8 octobre</button>
            <button value={"2024-10-09 00:00"} onClick={() => dateChange("2024-10-09 00:00")}>9 octobre</button>
            <button value={"2024-10-10 00:00"} onClick={() => dateChange("2024-10-10 00:00")}>10 octobre</button>
        </div>
    )
}

export default DaySelector