import React, { useState } from "react";
function ChipsInput() {
  const [chipList, setChipList] = useState([]);

  function handleAddChip(e) {
    const val = e.target.value.trim();
    if (e.keyCode === 13 && val.length > 0) {
      const chipListCopy = [...chipList];
      chipListCopy.push(e.target.value);
      setChipList(chipListCopy);
    }
  }

  function handleRemoveChip(item) {
    const chipListFiltered = chipList.filter(row => row !== item);
    setChipList(chipListFiltered);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <h2>Chip Input</h2>
      <input
        type="text"
        onKeyDown={handleAddChip}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        {chipList && chipList.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: 'flex',
                gap: '5px',
                backgroundColor: '#ddd',
                padding: '5px 10px',
                borderRadius: '100px'
              }}
            >
              <span>{item}</span>
              <button
                onClick={() => handleRemoveChip(item)}
                style={{ color: 'red', background: 'none', border: 'none' }}
              >X</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default ChipsInput;