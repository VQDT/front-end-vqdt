function isFuture(date: string) {

  const end = new Date(date).getTime();
  const now = new Date().getTime();
  return end < now;

}

export default isFuture;