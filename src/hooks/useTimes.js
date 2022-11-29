
const useTimes = (start, end) => {
  const times = []

  for (let i = start; i <= end; i++ ) {
    times.push(i)
  }
  return times
}

export default useTimes;