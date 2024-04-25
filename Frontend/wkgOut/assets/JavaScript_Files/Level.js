// Made by Riley Burke
export class Level
   {
    // data
    curLevel;
    curXP;
    totalXP;

    // the constructor
    constructor(curLevel, curXP, totalXP)
      {
       this.curLevel = curLevel;
       this.curXP = curXP;
       this.totalXP = totalXP;
      }

    // main functionality of the class, used to 
    // get the information and update it accordingly
    checkStatus( displayFlag )
      {
       // first, check if the xp is above the threshold
       if ( this.curXP >= 10 )
         {
          // level them up
          this.#levelUp();
         }
       
       if ( displayFlag )
         {
          // display the status
          this.#displayStatus();
         }
      }
    
    // function to easily call to update user
    updateXP( inXP )
      {
       // update the XP values
       this.totalXP += inXP;
       this.curXP += inXP;

       // run check status
       this.checkStatus( false );
      }
    
    // function used to update the class info
    #levelUp()
      {
       // reset the current xp
       this.curXP -= 10;

       // increment the level
       this.curLevel += 1;
      }

    // function used to display the curXP and Level
    #displayStatus()
      {
       // display the status however, may need some help :D
      }
   }