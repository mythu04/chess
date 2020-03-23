<script>
    
// Checkpoint 1 | Creating the queen object

    let queen = {
      direction: 'S',
      position : [4,0],
      whereabouts  : []
    }

 // Checkpoint 2 | Turning the queen
    
function changeDirection(N,S,E,W,NE,NW,SE,SW) 
{
let direction1;
 
      switch (direction) {
        case "S":
          direction1 = 'S'
          break;
        case "N":
          direction1 = 'N'
          break;
        case "E":
          direction1 = 'E'
          break;
        case "W":
          direction1 = 'W'
          break;
        case "NS":
          direction1 = 'NE'
          break;
        case "NW":
          direction1 = 'NW'
          break;
        case "SE":
          direction1 = 'SE'
          break;
        case "SW":
          direction1 = 'SW'
          break;
      }
     
    }
    
// Checkpoint 3 | Moving the queen forward

    function moveForward() {
      let yposition = queen.position.pop();
      let xposition = queen.position.pop(); 
      queen.position = [xposition,yposition+1];
      updatePosition(queen.position.toString())
      console.log(queen.position);
    }
    
// Checkpoint 4 | Jump move the queen
    
function jumpMoveForward (steps){
      let yposition = queen.position.pop();
      let xposition = queen.position.pop(); 
      queen.position = [xposition , yposition+steps];
      updatePosition(queen.position)
      console.log(queen.position);
    }
 
// Checkpoint 5 |  Tracking the position

    function updatePosition(position){
      queen.whereabouts.push(position);
      console.log(queen.whereabouts);
    }
  </script>
