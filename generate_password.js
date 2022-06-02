//define generatePassword function
function generatePassword(options) {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '0123456789'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // //testing data of req.body
  // const options = {
  //   length: 12,
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   excludeCharacters: '01234567qazwsxedcrfv'
  // }
  // console.log('options', options)

  // create a collection to store things user picked up
  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }
  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }
  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (collection.length === 0) {
    return 'There is no valid character in your selection.You must select at least one character set'
  }

  // remove things user do not need
  collection = collection.filter(character => !options.excludeCharacters.includes(character))

  console.log('collection', collection)

  // start generating password
  let password = ''
  for (let i = 1; i <= Number(options.length); i++) {
    password += sample(collection)
  }
  // return the generated password
  return password
}

// define sample function to randomly return an item in an array
function sample(Arr) {
  const index = Math.floor(Math.random() * Arr.length)
  return Arr[index]
}

module.exports = generatePassword
