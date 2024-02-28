import s from "../images/s.jpg"
export default function About(){
    return(
        <>
        <div id= "about">
    <div class="container">
        <div class="row">
            <div class="about-col-1">
                <img src={s}/>
             </div>
         <div class="about-col-1">
           <h1 class="sub-title">About me!</h1>
           <p>Our services typically involve planning, designing, and executing
            the construction or renovation of buildings and infrastructure. This can include residential, 
            commercial, or industrial projects. Construction services may encompass various activities
             such as site preparation, foundation work, structural development, plumbing, electrical work, and finishing touches.
              Companies providing construction services often manage the entire construction process, ensuring adherence to regulations
               and safety standards.</p>

               <div class="tab-titles">
                <p class="tab-links active-link" onclick="opentab('skills')">Skills</p>
                <p class="tab-links" onclick="opentab('Exprience')">Exprience</p>
                <p class="tab-links" onclick="opentab('Education')">Education</p>
               </div>
               <div class="tab-contents active-tab" id="skills">
                    <ul>
                        <li><span>ererer</span><br/>civel</li>
                        <li><span>ererer</span><br/>civel</li>
                        <li><span>ererer</span><br/>civel</li>
                    </ul>
               </div>
               <div class="tab-contents" id="Exprience"> 
                <ul>
                    <li><span>Exprience</span><br/>civel</li>
                    <li><span>Exprience</span><br/>civel</li>
                    <li><span>Exprience</span><br/>civel</li>
                </ul>
           </div>
           <div class="tab-contents" id="Education">
                     <ul>
                        <li><span>Education</span><br/>civel</li>
                         <li><span>Education</span><br/>civel</li>
                         <li><span>Education</span><br/>civel</li>
                    </ul>
                </div>
            </div>
             
            </div>
     </div>
    </div>
        </>
    )
}