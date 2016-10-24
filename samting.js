// make_hex_green(0,0);
// function make_hex_green(x,y)
//    {
//      base_image = new Image();
//      base_image.src = 'img/green-terain.png';
//      base_image.onload = function(){
//        c2.moveTo(x,y);
//        c2.drawImage(base_image, 100, 100);
//
//      }
//    }
//    make_hex_orange(0,0);
//    function make_hex_orange(x,y)
//       {
//         base_image = new Image();
//         base_image.src = 'img/orange-terain.png';
//         base_image.onload = function(){
//           c2.moveTo(x,y);
//           c2.drawImage(base_image, 100, 100);
//
//         }
//       }

// c2.fillStyle = '#f00';
// c2.beginPath();
// c2.moveTo(0, 0);
// c2.lineTo(100,50);
// c2.lineTo(50, 100);
// c2.lineTo(0, 90);
// c2.closePath();
// c2.fill();

// console.log("am incercat sa echipam o sabie in mana dreapta");
   // if(this.selected[0]!=-1 && this.selected[1]!=-1){
   // if(this.inventory[this.selected[0]*10+this.selected[1]].type==="wepon"||this.inventory[this.selected[0]*10+this.selected[1]].type==="sheeld"){
   //     if(this.hand_l_slot==null){
   //       if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
   //         this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
   //       }
   //       if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
   //         this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
   //       }
   //       if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
   //         this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
   //       }
   //       if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
   //         this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
   //       }
   //       if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
   //           this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
   //       }
   //
   //       this.hand_l_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
   //       this.inventory.splice(this.selected[0]*10+this.selected[1],1);
   //       this.selected[0]=-1;
   //       this.selected[1]=-1;
   //     }else{
   //       var intermediar;
   //       if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
   //         this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
   //       }
   //       if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
   //         this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
   //       }
   //       if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
   //         this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
   //       }
   //       if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
   //         this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
   //       }
   //       if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
   //          this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
   //       }
   //       if(this.hand_l_slot.hp!=null){
   //         this.max_helth-=this.hand_l_slot.hp;
   //       }
   //       if(this.hand_l_slot.en!=null) {
   //         this.max_energi-=this.hand_l_slot.en;
   //       }
   //       if(this.hand_l_slot.dmg!=null) {
   //         this.dmg-=this.hand_l_slot.dmg;
   //       }
   //       if(this.hand_l_slot.def!=null) {
   //         this.def-=this.hand_l_slot.def;
   //       }
   //       if(this.hand_l_slot.dex!=null) {
   //         this.dex-=this.hand_l_slot.dex;
   //       }
   //       intermediar=clone(this.hand_l_slot);
   //       this.hand_l_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
   //       this.inventory[this.selected[0]*10+this.selected[1]]=clone(intermediar);
   //       this.selected[0]=-1;
   //       this.selected[1]=-1;
   //     }
   //    }
   //  }else{
   //    if(this.hand_l_slot.hp!=null){
   //      this.max_helth-=this.hand_l_slot.hp;
   //    }
   //    if(this.hand_l_slot.en!=null) {
   //      this.max_energi-=this.hand_l_slot.en;
   //    }
   //    if(this.hand_l_slot.dmg!=null) {
   //      this.dmg-=this.hand_l_slot.dmg;
   //    }
   //    if(this.hand_l_slot.def!=null) {
   //      this.def-=this.hand_l_slot.def;
   //    }
   //    if(this.hand_l_slot.dex!=null) {
   //      this.dex-=this.hand_l_slot.dex;
   //    }
   //    this.inventory.push(clone(this.hand_l_slot));
   //    this.hand_l_slot=null;
   //  }
----------------------------------------------------------------------------------
inventar sa testam
{name:"Cover",def:1,href:"img/armur/hed_armur_1.png",type:"hed-armur",value:2,modi:2},
       {name:"Lether glovs",def:3,href:"img/armur/l_glovs1.png",type:"glovs-armur",value:10,modi:2},
       {name:"coif",def:3,href:"img/armur/hed_armur_2.png",type:"hed-armur",value:10,modi:2},
       {name:"Worn pants",def:3,href:"img/armur/pants1.png",type:"leg-armur",value:10,modi:2},
       {name:"cloth armur",def:5,href:"img/armur/bodi_armur_2.png",type:"bodi-armur",value:20,modi:2},
       {name:"Lite boots",def:3,href:"img/armur/boots2.png",type:"fit-armur",value:10,modi:2},
       {name:"Old ring",hp:1,en:1,href:"img/julary/ring1.png",type:"ring",value:5},
       {name:"faina",foame: 5,energie:0,href:"img/flower.png",type:"food",q:1,max_q:10,recipe:[1],value:5},
       {name:"wod_sord",dmg:1,href:"img/wepons/wod_sword.png",type:"wepon",value:2},
       {name:"mar",foame: 6,energie:2,href:"img/mar.png",type:"food",q:1,recipe:[5,6]},
       {name:"bred",foame: 10,energie:0 , href:"img/bred.png",type:"food",q:4,recipe:[2,3]},
       {name:"wariar glovs",def:5,href:"img/armur/l_glovs2.png",type:"glovs-armur",value:10,modi:2},
       {name:"lite armur",def:15,href:"img/armur/bodi_armur_1.png",type:"bodi-armur",value:30,modi:2},
       {name:"Old earring",hp:1,en:1,href:"img/julary/earring1.png",type:"earring",value:15,modi:2},
       {name:"Old iron earring",dmg:1,en:2,hp:1,href:"img/julary/earring2.png",type:"earring",value:25,modi:2},
       {name:"Old lether choker",dmg:1,dex:2,hp:1,href:"img/julary/neck1.png",type:"neckles",value:35,modi:2},
       {name:"Bone neckles",dmg:1,dex:2,hp:1,href:"img/julary/neck2.png",type:"neckles",value:40,modi:2}
