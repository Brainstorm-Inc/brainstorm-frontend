export function getTimeDifferenceAsString(date: Date) {
  const currentDate = new Date();
  const seconds = (currentDate.getTime() - date.getTime()) / 1000;
  const minutes = Math.round(seconds/60);
  const hours = Math.round(minutes/60);
  const days = Math.round(hours/24);
  const months = Math.round(days/30);

  switch(true) {
    case months >= 1:
      return months + " months";
    case days >= 1:
      return days + " days";
    case minutes >= 1:
      return minutes + " minutes";
    default:
      return seconds + " seconds";
  }
}
