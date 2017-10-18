var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length) {
    var serving = katzDeliLine.push()
    return `${serving}`
  } else {
  return "There is nobody waiting to be served!"
  }
}