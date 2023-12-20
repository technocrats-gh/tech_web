import React from "react";
import Image1 from "../assets/images/team/amankwah.jpg";
import Image2 from "../assets/images/team/asare.jpg";
import Image3 from "../assets/images/team/botchway.jpg";
import Image4 from "../assets/images/team/damste.jpg";
import Image5 from "../assets/images/team/gyimah.jpg";
import Image6 from "../assets/images/team/kodie.jpg";
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
                <div class="hive_grid_item"></div>
                <div class="hive_grid_item"></div>
            </div>
        </div>
    )
}

export default Hive;