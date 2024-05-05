import React from "react";
//only the files inside public folders can be referenced from html
//import is differet but direct referning is diff

const Categories=[  
{
  id:1,
  title:"Dog Chain Leash ",
  image:"images/Dog1.jpg",
  type:"Dog Accessories"
},
{
  id:2,
  title:"Dog Leash ",
  image:"images/Dog2.png",
  type:"Dog Accessories"
},
{
  id:3,
  title:"Dog Leash ",
  image:"images/Dog3.jpg",
  type:"Dog Accessories"
},{
  id:4,
  title:"Chained Dog Leash ",
  image:"images/Dog4.jpg",
  type:"Dog Accessories"
},{
  id:5,
  title:"Dog Harness ",
  image:"images/Dog5.jpg",
  type:"Dog Accessories"
},{
  id:6,
  title:"Dog Harness ",
  image:"images/Dog6.jpg",
  type:"Dog Accessories"
},{
  id:7,
  title:"Printed Dog Harness ",
  image:"images/Dog7.jpg",
  type:"Dog Accessories"
},{  
  id:8,
  title:"Printed Dog Harness ",
  image:"images/Dog8.jpg",
  type:"Dog Accessories"
},
{
  id:9,
  title:"Dog Rope ",
  image:"images/Dog9.png",
  type:"Dog Accessories"
},
{
  id:10,
  title:"Dog Harness ",
  image:"images/Dog10.jpg",
  type:"Dog Accessories"
},{
  id:11,
  title:"Printed Dog Harness ",
  image:"images/Dog11.jpg",
  type:"Dog Accessories"
},{
  id:12,
  title:"Dog Bed ",
  image:"images/Dog12.png",
  type:"Dog Accessories"
},{
  id:13,
  title:"Dog Harness ",
  image:"images/Dog13.jpg",
  type:"Dog Accessories"
},{
  id:14,
  title:"Printed Dog Bed ",
  image:"images/Dog14.png",
  type:"Dog Accessories"
},{
  id:15,
  title:"Printed Dog Harness ",
  image:"images/Dog15.jpg",
  type:"Dog Accessories"
},
{
  id:16,
  title:"Dog Bed ",
  image:"images/Dog16.png",
  type:"Dog Accessories"
},
{
  id:17,
  title:"Dog Accessories ",
  image:"images/Dog17.jpg",
  type:"Dog Accessories"
},{
  id:18,
  title:"Dog Collar and Leash ",
  image:"images/Dog18.jpg",
  type:"Dog Accessories"
},{
  id:19,
  title:"Dog Bed ",
  image:"images/Dog19.png",
  type:"Dog Accessories"
},{
  id:20,
  title:"Dog Leash ",
  image:"images/Dog20.png",
  type:"Dog Accessories"
},{
  id:21,
  title:"Printed Dog Collar and Leash ",
  image:"images/Dog21.jpg",
  type:"Dog Accessories"
},{
  id:22,
  title:"Cushion Web Lunging ",
  image:"images/CushionWebLunge1.jpeg",
  type:"Horse Accessories"
},{
  id:23,
  title:"Polo Wrap ",
  image:"images/PoloWrap.jpeg",
  type:"Horse Accessories"
},{
  id:24,
  title:"Nylon Horse Halter And Rope ",
  image:"images/HorseHalter1.jpg",
  type:"Horse Halter"
},{
  id:25,
  title:"Printed Horse Halter ",
  image:"images/HorseHalter2.jpg",
  type:"Horse Halter"
},{
  id:26,
  title:"Horse Halter ",
  image:"images/HorseHalter3.jpg",
  type:"Horse Halter"
},{
  id:27,
  title:"Printed Horse Halter Set ",
  image:"images/HorseHalter4.jpg",
  type:"Horse Halter"
},{
  id:28,
  title:"Printed Horse Halter ",
  image:"images/HorseHalter6.jpg",
  type:"Horse Halter"
},{
  id:29,
  title:"Printed Horse Halter ",
  image:"images/HorseHalter7.jpg",
  type:"Horse Halter"
},{
  id:30,
  title:"Printed Horse Halter and Lead ",
  image:"images/HorseHalter8.jpg",
  type:"Horse Halter"
},{
  id:31,
  title:"Multicolor Horse Rope Halter ",
  image:"images/HorseHalter9.jpg",
  type:"Horse Halter"
},{
  id:32,
  title:"Rainbow Horse Nylon Halter ",
  image:"images/HorseHalter10.jpg",
  type:"Horse Halter"
},{
  id:33,
  title:"Horse Rope Halter ",
  image:"images/HorseHalter11.jpg",
  type:"Horse Halter"
},{
  id:34,
  title:"Horse Leash ",
  image:"images/HorseLeash1.jpg",
  type:"Horse Leashes and Ropes"
},{
  id:35,
  title:"Horse Leash ",
  image:"images/HorseLeash2.jpg",
  type:"Horse Leashes and Ropes"
},{
  id:36,
  title:"Horse Leash ",
  image:"images/HorseLeash3.jpg",
  type:"Horse Leashes and Ropes"
},{
  id:37,
  title:"Horse Leash",
  image:"images/HorshLeash_4.jpg",
  type:"Horse Leashes and Ropes"
},{
  id:38,
  title:"Rainbow Type ",
  image:"images/HorseLeash5.jpg",
  type:"Horse Leashes and Ropes"
},{
  id:39,
  title:"Horse Rug ",
  image:"images/HorseRug1.jpg",
  type:"Horse Wear"
},{
  id:40,
  title:"Horse Rug ",
  image:"images/HorseRug2.png",
  type:"Horse Wear"
},{
  id:41,
  title:"Horse Rug ",
  image:"images/HorseRug2.png",
  type:"Horse Wear"
},{
  id:42,
  title:"Horse Rug ",
  image:"images/HorseRug3.jpg",
  type:"Horse Wear"
},{
  id:43,
  title:"Horse Rug ",
  image:"images/HorseRug4.jpg",
  type:"Horse Wear"
},{
  id:44,
  title:"Horse Rug ",
  image:"images/HorseRug3.jpg",
  type:"Horse Wear"
},
{
  id:45,
  title:"Horse Rug ",
  image:"images/HorseRug7.png",
  type:"Horse Wear"
},{
  id:46,
  title:"Horse Rug ",
  image:"images/HorseRug8.png",
  type:"Horse Wear"
},{
  id:47,
  title:"Saddle Pad ",
  image:"images/SaddlePad1.png",
  type:"Saddle Pads"
},{
  id:48,
  title:"Saddle Pad ",
  image:"images/SaddlePad2.png",
  type:"Saddle Pads"
},{
  id:49,
  title:"Saddle Pad ",
  image:"images/SaddlePad3.png",
  type:"Saddle Pads"
},{
  id:50,
  title:"Saddle Pad ",
  image:"images/SaddlePad4.png",
  type:"Saddle Pads"
},{
  id:51,
  title:"Saddle Pad ",
  image:"images/SaddlePad5.png",
  type:"Saddle Pads"
},{
  id:52,
  title:"Saddle Pad ",
  image:"images/SaddlePad1.png",
  type:"Saddle Pads"
},
];
export default Categories;