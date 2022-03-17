import React from 'react';
import CalendarPicker from '@mui/lab/CalendarPicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import "../style.css";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CalendarPicker
        date={selectedDate}
        onChange={handleDateChange}
        shouldDisableDate={(date) => date.getDay() === 0 || date.getDay() === 6}
        showDaysOutsideCurrentMonth={true}
      />
    </LocalizationProvider>
  );
}

