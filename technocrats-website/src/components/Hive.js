import React from "react";
import Image1 from "../assets/images/team/amankwah.jpg";
import Image2 from "../assets/images/team/asare.jpg";
import Image3 from "../assets/images/team/botchway.jpg";
import Image4 from "../assets/images/team/damtse.jpg";
import Image5 from "../assets/images/team/gyimah.jpg";
import Image6 from "../assets/images/team/kodie.jpg";
import Image7 from "../assets/images/team/faako.jpg";
import Image8 from "../assets/images/team/boateng.jpg";
import "../styles/hive.css";

function Hive() {
    return (
        <div class="w-full">
            <div class="hive_grid">
                <div class="hive_grid_item">
                    <img src={Image1} alt="Team Member"/>
                </div>
                <div class="hive_grid_item">
                    <img src={Image2} alt="Team Member"/>
                </div>
                <div class="hive_grid_item">
                    <img src={Image3} alt="Team Member"/>
                </div>
                <div class="hive_grid_item">
                    <img src={Image4} alt="Team Member"/>
                </div>
                <div class="hive_grid_item">
                    <img src={Image5} alt="Team Member"/>
                </div>
                <div class="hive_grid_item">
                    <img src={Image6} alt="Team Member"/>
                </div>
                <div class="hive_grid_item">
                    <img src={Image7} alt="Team Member" />
                </div>
                <div class="hive_grid_item">
                    <img src={Image8} alt="Team Member" />
                </div>

                {/*still a work in progress */}
                <div className="team-info rounded-2xl text-[18px] leading-[28px] font-normal italic p-2">
                    <p>
                        Person Info goes here <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hive;