import React from "react";
import "./Styles/AnimationDog.css"

export const AnimatedDog = () => {
  return (
    <div>
      {" "}
      <div class="dog">
        <div class="dog-body">
          <div class="dog-tail">
            <div class="dog-tail">
              <div class="dog-tail">
                <div class="dog-tail">
                  <div class="dog-tail">
                    <div class="dog-tail">
                      <div class="dog-tail">
                        <div class="dog-tail"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dog-torso"></div>
        <div class="dog-head">
          <div class="dog-ears">
            <div class="dog-ear"></div>
            <div class="dog-ear"></div>
          </div>
          <div class="dog-eyes">
            <div class="dog-eye"></div>
            <div class="dog-eye"></div>
          </div>
          <div class="dog-muzzle">
            <div class="dog-tongue"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
