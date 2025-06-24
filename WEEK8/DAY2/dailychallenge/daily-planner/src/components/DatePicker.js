import React from 'react';

export default function DatePicker({ selectedDate, onDateChange }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor="date">Choisissez un jour : </label>
      <input
        type="date"
        id="date"
        value={selectedDate}
        onChange={(e) => onDateChange(e.target.value)}
      />
    </div>
  );
}
