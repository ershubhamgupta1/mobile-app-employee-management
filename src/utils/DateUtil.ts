export const formatTimestamp = (timestamp) =>{
    const date = new Date(timestamp);
    const now = new Date();
    
    // Helper function to format the day with suffix
    function getDaySuffix(day) {
        if (day > 3 && day < 21) return 'th'; // for 4-20, 24-30 etc.
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }
  
    // Get date components
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const isPM = hours >= 12;
    const formattedHours = ((hours + 11) % 12 + 1); // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    
    // Check if the timestamp is today's date
    if (date.toDateString() === now.toDateString()) {
        return `${formattedHours}:${formattedMinutes} ${isPM ? 'PM' : 'AM'}`;
    }
  
    // Check if the timestamp is yesterday's date
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    if (date.toDateString() === yesterday.toDateString()) {
        return 'Yesterday';
    }
  
    // Check if the timestamp is in the current month
    if (date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth()) {
        return `${day}${getDaySuffix(day)} ${month}`;
    }
  
    // Check if the timestamp is in the current year and past month
    if (date.getFullYear() === now.getFullYear() && date.getMonth() < now.getMonth()) {
        return `${day}${getDaySuffix(day)} ${month}`;
    }
  
    // Check if the timestamp is in the current year
    if (date.getFullYear() === now.getFullYear()) {
        return `${day}${getDaySuffix(day)} ${month}, ${year}`;
    }
  
    // Default format for other dates (optional)
    return `${day}${getDaySuffix(day)} ${month}, ${year}`;
}

