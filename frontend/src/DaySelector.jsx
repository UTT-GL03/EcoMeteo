import 'dayjs/locale/fr'

function DaySelector({date ,dateChange}) {
    return (
        <div className="grid">
            <button value={"2024-10-08"} onClick={() => dateChange("2024-10-08")}>8 octobre</button>
            <button value={"2024-10-09"} onClick={() => dateChange("2024-10-09")}>9 octobre</button>
            <button value={"2024-10-10"} onClick={() => dateChange("2024-10-10")}>10 octobre</button>
        </div>
    )
}

export default DaySelector