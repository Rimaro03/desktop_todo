import Calendar from "./components/calendar";
import Tasklist from "./components/tasklist";
import "./style.css"

export default function App() {
  return (
    <div className="main">
      <div className="calendar">
        <Calendar />
      </div>
      <Tasklist />
    </div>
  )
}