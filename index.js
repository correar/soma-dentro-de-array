const val = 16
const arr = [3, 9, 8, 1, 7, 11, 13, 29, 14]

const a = (val, arr) => {
  sortA = arr.sort(function(a, b) {
    return a - b
  })

  for (i = 0; i < sortA.length; i++) {
    value = val - sortA[i]
    currentPosition = sortA.length - 1 - i
    position = Math.ceil(currentPosition / 2) + i
    result = verificar(sortA, position, value)
    if (result === true) {
      break
    }
  }
  return result
}

const verificar = (sortA, position, value, gt = false, lt = false) => {
  if (gt === true && lt === true) {
    return false
  }
  if (value === sortA[position] || value === sortA[sortA.length - 1]) {
    return true
  } else if (value < sortA[position] && value > 0) {
    position = Math.ceil(position / 2)
    return verificar(sortA, position, value, gt, (lt = true))
  }
  if (value > sortA[position] && value <= sortA[sortA.length - 1]) {
    position = Math.ceil(position / 2 + position)
    return verificar(sortA, position, value, (gt = true), lt)
  }
  return false
}

console.log(a(val, arr))
