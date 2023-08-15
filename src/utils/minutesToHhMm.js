const minutesToHhMm = (minutes) => {
  return new Date(minutes * 60 * 1000).toISOString().substr(11, 5);
};

export default minutesToHhMm;
