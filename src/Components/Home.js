import React from "react";
import PetHouse from "../assets/kennel.png";
import DogCatDayCare from "../assets/dog_and_cat_daycare.png";
import Camera from "../assets/camera.png";
import Adoption from "../assets/adoption.png";
import { AnimatedDog } from "./AnimatedDog";
export const Home = () => {
  return (
    <>
      <div>
        <div className="row">
          <div>
            <div className="box-1 col-6">
              <div className="parallax_text ">
                <h1 className="primary_header">
                  The Furry Town
                  <h3>The</h3>
                  <h3>Perfect place</h3>
                  <h3>to dayout your pets</h3>
                </h1>

                <div className="text_boxshadow ">
                  <div className="pet_home cursor_pointer">
                    <img src={PetHouse} alt="" />
                    Pet Home-stay
                  </div>
                  <div className="pet_home cursor_pointer">
                    <img src={DogCatDayCare} alt="" />
                    Dog and Cat Daycare
                  </div>
                  <div className="pet_home cursor_pointer">
                    <img src={Camera} alt="" /> Pet Photoshoots
                  </div>
                  <div className="pet_home cursor_pointer">
                    <img src={Adoption} alt="" />
                    Adoptions
                  </div>
                </div>
              </div>
                  <AnimatedDog />
            </div>
            <div className="box-3">
              <h1 className="parallax_text ">HELLO WORLD 2</h1>
            </div>
            <div className="box-2">
              <h1 className="parallax_text ">HELLO WORLD 2</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
