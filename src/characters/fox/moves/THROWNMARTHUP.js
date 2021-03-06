
import {player} from "main/main";
import {Vec2D} from "../../../main/util/Vec2D";
export default {
  name : "THROWNMARTHUP",
  canEdgeCancel : false,
  canGrabLedge : [false,false],
  canBeGrabbed : false,
  offset : [[-10.07,4.25],[-10.75,3.96],[-11.43,3.40],[-11.27,3.38],[-10.92,3.48],[-10.61,3.59],[-10.51,3.63],[-13.02,6.00],[-5.68,16.09],[-5.68,16.09]],
  init : function(p,input){
    player[p].actionState = "THROWNMARTHUP";
    if (player[p].phys.grabbedBy < p){
      player[p].timer = -1;
    }
    else {
      player[p].timer = 0;
    }
    player[p].phys.grounded = false;
    player[p].phys.pos = new Vec2D(player[player[p].phys.grabbedBy].phys.pos.x,player[player[p].phys.grabbedBy].phys.pos.y);
    this.main(p,input);
  },
  main : function(p,input){
    player[p].timer++;
    if (!this.interrupt(p,input)){
      if (player[p].timer > 0){
        player[p].phys.pos = new Vec2D(player[player[p].phys.grabbedBy].phys.pos.x+this.offset[player[p].timer-1][0]*player[p].phys.face,player[player[p].phys.grabbedBy].phys.pos.y+this.offset[player[p].timer-1][1]);
      }
    }
  },
  interrupt : function(p,input){
    return false;
  }
};
