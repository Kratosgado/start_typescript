function resonateY(numOfPoints: number, height: number) {
   let up = -height * 0.5, down = height * 1.5, counter = height * 0.5, lines: number = 0;
   
   const step = height

   const controlPointsY = Array.from({ length: numOfPoints }, (_, index) => {
      let moveUp: boolean = true
      if (counter > up && moveUp) {
         let y = counter
         counter -= step;
         return y
         
      } else if (counter === up && moveUp) {
         let y = counter;
         counter += step;
         moveUp = false
         return y
         
      } else if (counter < down && !moveUp) {
         let y = counter;
         counter += step;
         return y
         
      } else {
         let y = counter;
         counter -= step;
         moveUp = true
         return y
         
         }
      }
   )
   return controlPointsY;
}
 
console.log(resonateY(8, 100))