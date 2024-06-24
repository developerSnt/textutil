import React, {useState} from 'react'

export default function About(props) {
//     const [mystyle,setmystyle] = useState({
//         color:'white',
//         backgroundColor : 'black'

//     })
//     const [mystyle1,setmystyle1] =useState({
// color : 'yellow',
//   backgroundColor : 'black'
//     })
//     const [btntext,setBtntEXT] = useState("Enable Dark Mode")
//    const toggalstyle =  ()=>{
//         if(mystyle.color === 'white')
//     {
//         setmystyle({
//              color:'black',
//         backgroundColor : 'white'
//         })
//         setBtntEXT("Enable Dark Mode") 
//     }
//          else{
//             setmystyle({
//                 color:'white',
//            backgroundColor : 'black',
//            border: '1px solid white'
//            })
          
//            setBtntEXT("Enable Light Mode") 
//         }
//         if(mystyle1.color === 'yellow')
//             {
//                 setmystyle1({
//                      color:'black',
//                 backgroundColor : 'white'
//                 })
//                 setBtntEXT("Enable Dark Mode") 
//             }
//                  else{
//                     setmystyle1({
//                         color:'yellow',
//                    backgroundColor : 'black',
//                     border: '1px solid white'
//                    })
                  
//                    setBtntEXT("Enable Light Mode") 
//                 }
//     }
let mystyle =  {
    color: props.modes === 'dark'?'white':'#042743',
    backgroundColor: props.modes === 'dark'?'rgb(36 74 104)':'white',
    border: '1px solid',
    borderColor:  props.modes === 'dark'?'white':'#042743'
}
 return (
  <>
        <div className="container" style={mystyle}>
            <h1 className="my-3" style={{ color: props.modes === 'dark'?'white':'#042743'}}>About Us</h1>
        <div className="accordion" id="accordionExample" style={mystyle}>  
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne"  style={mystyle}>
            <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" /*style={mystyle1}*/>
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" style={mystyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"  style={mystyle} >
            <div className="accordion-body" style={mystyle}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header"  style={mystyle} id="headingTwo" /*style={mystyle1}*/>
            <button  /*style={mystyle1}*/  style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingThree" /*style={mystyle1}*/>
            <button /*style={mystyle1}*/ style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
<div className = "container my-4"></div>
 <button type="button" /*onClick = {toggalstyle}*/ className="btn  btn-ligh "> {/* /*{btntext}*/}</button> 

 </div> 
  </>
  )
}
