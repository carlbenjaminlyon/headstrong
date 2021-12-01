import React from 'react';

const MoonPhase = ({moonPhase}) => {
  const displayMoon = () => {
    let charCode = 0;
    switch(moonPhase) {
      case 'New Moon':
        charCode = 0x1F311;
        break;
      case 'Waxing Crescent':
        charCode = 0x1F312;
        break;
      case '1st Quarter':
        charCode = 0x1F313;
        break;
      case 'Waxing Gibbous':
        charCode = 0x1F314;
        break;
      case 'Full Moon':
        charCode = 0x1F315;
        break;
      case 'Waning Gibbous':
        charCode = 0x1F316;
        break;
      case '3rd Quarter':
        charCode = 0x1F317;
        break;
      case 'Waning Crescent':
        charCode = 0x1F318;
        break;
      default:
        charCode = 0x1F31D;
    }

    return String.fromCodePoint(charCode);
  };

  return (
    <span>
      {displayMoon()}
    </span>
    );
}

export default MoonPhase;
