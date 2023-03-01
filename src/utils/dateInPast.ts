const dateInPast = (firstDate: Date): boolean => {
  if (firstDate.setHours(0, 0, 0, 0) <= new Date().setHours(0, 0, 0, 0)) {
    return true;
  }

  return false;
};

export default dateInPast;
