//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

function abbrevName(name){
  return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}
