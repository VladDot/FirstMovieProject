import React from "react";

import { generateImgUrl } from "../../../helpers";

const PersonaPhoto = ({ profile_path, isLoadingPersons, name }) => {
    return (
        <div className="mb:w-full minSm:min-w-[40%] md:min-w-[30%]">
            <img
                className=" w-full aspect-[1/1.5] block "
                src={
                    isLoadingPersons
                        ? "asdasda"
                        : profile_path !== null
                        ? generateImgUrl({
                              size: "w500",
                              path: profile_path,
                          })
                        : "mock"
                }
                alt={name}
            />
        </div>
    );
};

export default PersonaPhoto;
