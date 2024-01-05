import React, { useState, useEffect } from "react";
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
    let memberBio, memberName;

    const [memberHover, setMemberHover] = useState(0)

    switch (memberHover) {
        case 1:
            memberName = "Kwaku Amoako Amankwah";
            memberBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
            break;
        case 2:
            memberName = "Fredrick Asare";
            memberBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
            break;
        case 3:
            memberName = "Emmanuel Botchway";
            memberBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
            break;
        case 4:
            memberName = "Enoch Damtse";
            memberBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
            break;
        case 5:
            memberName = "Samuel Nignamon Gyimah";
            memberBio = "Samuel has worked as a Data Scientist for over 2 years. He holds a bachelors degree in Mechanical Engineering from UENR. He provides valuable ideas and insights in the field of Machine Learning and AI as he leads our team of data scientist ";
            break;
        case 6:
            memberName = "Samuel Martey Kodie";
            memberBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
            break;
        case 7:
            memberName = "Edward Yakubu Faako";
            memberBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
            break;
        case 8:
            memberName = "Mingle Kwesi Akuamoah Boateng";
            memberBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
            break;

        default:
            memberName = "";
            memberBio = "";
            break;
    }

    const memberBasic = [
        {
            memberImage: Image1,
            memberIndex: 1,
        }, {
            memberImage: Image2,
            memberIndex: 2,
        }, {
            memberImage: Image3,
            memberIndex: 3,
        }, {
            memberImage: Image4,
            memberIndex: 4,
        }, {
            memberImage: Image5,
            memberIndex: 5,
        }, {
            memberImage: Image6,
            memberIndex: 6,
        }, {
            memberImage: Image7,
            memberIndex: 7,
        }, {
            memberImage: Image8,
            memberIndex: 8,
        }
    ];

    useEffect(() => {
        console.log(memberHover);
    }, [memberHover])
    return (
        <div className="w-full">
            <div className="hive_grid">
                {memberBasic.map(basic => (
                    <div className="hive_grid_item" onMouseEnter={() => setMemberHover(basic.memberIndex)} onMouseLeave={() => setMemberHover(9)}>
                        <img src={basic.memberImage} alt="Team Member" />
                </div>
                ))}

                {/*The commented code below is supposed to wrap around the team info component and only display when there 
                is a bio to show. That works but the transition doesn't work when this is implemented */}
                {/* {memberBio !== "" && 
                } */}
                <div className="team-info rounded-2xl text-[18px] leading-[28px] font-normal italic p-2">
                    <p>
                        {memberName} <br />
                        {memberBio}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hive;