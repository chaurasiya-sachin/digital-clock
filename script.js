
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'pm' : 'am';
    // Convert 24-hour time to 12-hour time
    hours = hours % 12;
    hours = hours===0 ? 12 : hours; // the hour '0' should be '12'
    // Pad single digits with leading zeros
    const hourStr = String(hours).padStart(2, '0');
    const minuteStr = String(minutes).padStart(2, '0');
    const secondStr = String(seconds).padStart(2, '0');
    document.getElementById('hour-hand').textContent = hourStr;
    document.getElementById('minute-hand').textContent = minuteStr;
    document.getElementById('second-hand').textContent = secondStr;
    document.getElementById('am-pm').textContent = amPm;
    changeBackgroundImage(now.getHours());
  }
  
  function changeBackgroundImage(hours) {
    let backgroundImage;
  
    if (hours >= 6 && hours < 12) {
      // Morning
      backgroundImage = 'url("./image/morning.jpg")';
    } else if (hours >= 12 && hours < 16) {
      // Afternoon
      backgroundImage = 'url("./image/afternoon.jp")';
    } else if (hours >= 16 && hours < 20) {
      // Evening
      backgroundImage = 'url("./image/evening.jpg")';
    } else {
      // Night
      backgroundImage = 'url("./image/night.jpg")';
    }
  
    document.body.style.backgroundImage = backgroundImage;
    document.body.style.backgroundSize = 'cover'; 
  }
  
 
  setInterval(updateClock, 1000);
  
 
  updateClock();
  