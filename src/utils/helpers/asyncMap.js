
const asyncMap = async(array, func, callback) => {
  const items = []
  for (let index = 0; index < array.length; index++) {
    const item = await func(array[index], index, array)
    items.push(item)
  }
  callback && callback()
  return Promise.all(items)
}

export default asyncMap