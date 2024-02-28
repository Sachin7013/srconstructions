import three from "../images/3.jpg"
import four from "../images/4.jpg"
import five from "../images/5.jpg"
import six from "../images/6.jpg"
import seven from "../images/7.jpg"
import eight from "../images/8.jpg"
import two from "../images/2.jpg"



export default function Portfolio(){
    return(
        <>
            <div id="porfolio">
    <div class="container">
        <h1 class="sub-title">My Work</h1> 
            <div class="work-list">
                <div class="work">
                    <img src={three}/>
                    <div class="layer">
                        <h3>plumbing</h3>
                        <p>pipes, fixtures, water supply, drainage, leaks, repairs, installations, maintenance, clogs, sewage, plumbers</p>
                        <a href="#"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                 <div class="work">
                    <img src={four}/>
                    <div class="layer">
                        <h3>Patch Work</h3>
                        <p>sealant, temporary fix, repair, mend, cover, makeshift, band-aid solution, quick fix, stopgap, makeshift solution</p>
                        <a href="#"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                 </div>
                <div class="work">
                    <img src={two}/>
                    <div class="layer">
                        <h3>Staircase Work</h3>
                        <p>Staircase construction, stairway design, balustrade installation, handrail fitting, newel post construction, stair tread installation,
                             riser installation, stair stringer installation, stair nosing fitting, baluster installation</p>
                        <a href="#"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src={five}/>
                    <div class="layer">
                        <h3>Planning</h3>
                        <p>When planning a construction project, it's important to consider the scope, timeline, budget, and resources required.</p>
                        <a href="#"><i class="fas fa-external-link-alt"></i></a>
                    </div>
            </div>
                <div class="work">
                    <img src={seven}/>
                    <div class="layer">
                        <h3>Consultation</h3>
                        <p>Consultation work involves providing expert advice, guidance, and recommendations to individuals, businesses, or organizations in a specific field or industry.</p>
                        <a href="#"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src={eight}/>
                    <div class="layer">
                        <h3>Roffing</h3>
                        <p>Roofing work involves the installation, repair, and maintenance of roofs on residential, commercial, and industrial buildings. </p>
                        <a href="#"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </div>
                <a href="#" class="btn">see more</a>
    </div>
</div>
        </>
    )
}