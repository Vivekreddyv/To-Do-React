// import { useState } from "react"
// export default function Todo(){
//     const[add,setAdd]=useState("")
//     function taketask(e){
//         setAdd(e.target.value)
//     }
//     function Addtask(){

//     }
    
//     const items = [
//         {
//             id:1,
//             course:"C++",
//             iscompleted:true
//         },
//         {
//             id:2,
//             course:"JAVA",
//             iscompleted:true
//         },
//         {
//             id:3,
//             course:"PYTHON",
//             iscompleted:true
//         }
//     ]
//     return(
//         <div>
//             <div>
//                 <ul>
//                     {
//                         items.map(mapp=><li key={mapp.id} value={mapp.id}>{mapp.course}</li>)
//                     }
//                 </ul>
//             </div>
//         <input onChange={taketask}></input>
//         <button onClick={Addtask}>+</button>
//         <button>FILTER</button>
//         <button>DELETE</button>
//         </div>
//     )
// }