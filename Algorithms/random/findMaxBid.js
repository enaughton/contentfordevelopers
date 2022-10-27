const findMaxBid = function (bids) {
  let maxBid = bids[0],
    minBid = bids[0];
  for (let i = 0; i < bids.length; i++) {
    for (let j = 0; j < bids.length; j++) {
      if (bids[i] > bids[j] && bids[i] > maxBid) {
        maxBid = bids[i];
      } else if (bids[i] < bids[j] && bids[i] < minBid) {
        minBid = bids[i];
      }
    }
  }
  return [minBid, maxBid];
}

const allBids = [2, 3, 5, 6, 1, 2, 4, 5];
console.log(findMaxBid(allBids));

// O(n^2) Time Complexity = nested for loops Quadratic Complexity BAD

// const findMaxBidQuicker = function (bids) {
//   let maxBid = bids[0]
//   for (let i = 0; i < bids.length; i++) {
//     if (bids[i] > maxBid) {
//       maxBid = bids[i]
//     }
//   }
//   return maxBid
// }

const findMaxBidQuicker = function (bids) {
  let maxBid = bids[0];
  console.log(`Find the Maxmium Value given an array of values.
  

  const findMaxBidQuicker = function (bids) {
    let maxBid = bids[0];
    for (let i = 0; i < bids.length; i++) {
      if (bids[i] >= maxBid) {
        maxBid = bids[i]
      }
    `)
  for (let i = 0; i < bids.length; i++) {
    console.log("\n🔶 ITERATION", i,"🔶\nbids[",i,"] =",bids[i]);
    if (bids[i] >= maxBid) {
      console.log("✅CHANGES BEING MADE(TRUTHY)\nSince this value is larger that the current maximum value (",maxBid,"), we make the adjustment and set maxBid to",i, "✅")
      maxBid = bids[i]
      console.log("maxBid after iteration #",i, ": ", maxBid)
    } else {
      console.log("🚫NO CHANGES BEING MADE(FALSY)\nThe max bid does not change since bids[",i,"] = ",bids[i]," < ", maxBid,". So we move on to the next iteration, as long as i < bids.length =",bids.length,"🚫")
    }
  }
  return maxBid
}

const allBidsQuicker = [2, 3, 5, -4, 4, 2, 4, 5];
console.log("findMaxBidQuicker: ", findMaxBidQuicker(allBidsQuicker));

// LINEAR TIME COMPLEXITY IS LINEAR
// SO DO SAME THING AFTER THE FIRST LOOP IS DONE
// SO TIME COMPLEXITY IS O(N) + O(N) = O(2N) = O(N)

const findMinBidQuicker = function (bids) {
  let minBid = bids[0];
  for (let i = 0; i < bids.length; i++) {
    if (bids[i] < minBid) {
      minBid = bids[i]
    }
  }return minBid
}
console.log(allBidsQuicker);
console.log(findMinBidQuicker(allBidsQuicker));

// WHAT IF SORTED

// CONSTANT TIME 

//  what about .length() ???? STILL CONSTANT BECAUSE length is a property that comes with the data structure of and OBJECT, which really is what an ARRAY is :) 

// accessing the property of an object has CONSTANT time complexity

// IF DONE ON ARRAY, LINEAR as it would have to go through each item (n), Objects have properties, Array is an object, length is property

// SO... IF SORTED:
//      array.length-1 -  CONSTANT
//      [array[0]         - CONSTANT
// CONSTANT TIME 


// EXAMPLES OF 
// CONSTANT TIME:
// Access to an array
// LINEAR TIME
// loops, adding items of the array
// QUADRATIC TIME
// nested loops
// LOGARITHMIC TIME 
// divide and conquer 

// .pop(); removes last item from array

