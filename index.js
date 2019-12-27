

superbowlWin = (r) => {
   let result = r.find(r =>
      r.result === "W"
   )
   return result ? result.year : undefined
}


