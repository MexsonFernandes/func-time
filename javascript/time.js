/**
 *  @param {function} funcName Function to be executed
 */
function checkFuncTime(funcName) {
  const start_time = new Date().getMilliseconds();
  try {
    funcName();
  } catch (e) {
    console.log(e);
  }
  const end_time = new Date().getMilliseconds();
  // compute the func time
  console.log(
    "Function " +
      funcName.name +
      " took " +
      (end_time - start_time) +
      " milliseconds to execute."
  );
}

/**
 * function
 */
function longExecutingFunc() {
    var array = [], total = 10000000, i=0;
    while(i<=total) {
        array.push(Math.random())
        i+=1
    }
    console.log("I am long fun!")
}

/**
 * small running function
 */
function shortRunningFunc() {
  console.log("I am short func!");
}

checkFuncTime(shortRunningFunc);

checkFuncTime(longExecutingFunc);
