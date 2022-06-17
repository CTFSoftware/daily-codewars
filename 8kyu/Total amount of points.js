//Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)
