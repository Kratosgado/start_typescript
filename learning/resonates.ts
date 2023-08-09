function resonateY(numOfPoints: number, height: number) {
   let up = -height * 0.5, down = height * 1.5, counter = height * 0.5, lines: number = 0;
   
   const step = height
   let moveUp: boolean = true
   while ( lines <= numOfPoints ) {
     if (counter > up && moveUp) {
       console.log(counter)
       counter -= step;
     } else if (counter === up && moveUp) {
        console.log(counter);
        counter += step;
       moveUp = false
     } else if (counter < down && !moveUp) {
       console.log(counter);
       counter += step;
     } else {
        console.log(counter)
        counter -= step;
       moveUp = true
      }
      lines++;
   }
 }
 resonateY(8, 100)