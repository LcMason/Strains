import React from "react";
import reactRouterDom from "react-router-dom";
// import {Link} from "react-router-dom";


function About() {

//add background image to this component 1:04:00
    return (
        <div className="container">
        
                <div className="block">
                    <p>
                         THC is used medicinally to relieve symptoms of certain conditions. Chronic pain relief is the <a className="link" href="https://pubmed.ncbi.nlm.nih.gov/21039759/">most common</a> reason why people seek medical cannabis. A small 2010 study of chemo patients found those who took a THC-containing medicine in combination with standard treatment experienced stronger protection against nausea and vomiting than patients who received the standard treatment alone.
                    </p>

                    {/* <a href="https://pubmed.ncbi.nlm.nih.gov/21039759/"> common reason</a> */}
                </div>
                <br></br>
                

                <div className="block">
                    <h3 className="heading-2">Reduces muscle spasms in paraplegics</h3>
                    <p>
                        Studies suggest THC products can modestly reduce muscle spasms, a common symptom experienced by people with Multiple Sclerosis (MS) and paraplegia.
                    </p>
                </div>

                <div className="block">
                    <h3 className="heading-3">Improve Sleep</h3>
                    <p>
                        Sleep disturbances are typical in people living with health problems like MS and chronic pain. Studies in these groups show THC products can improve short-term sleep problems, reduce sleep disturbances, and decrease the time it takes to fall asleep.
                    </p>
                </div>
          
        </div>
    )
}

export default About;