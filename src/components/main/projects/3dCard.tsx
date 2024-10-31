"use client";
import { CardBody, CardContainer, CardItem} from "../../ui/3d-card";

export function projectCard({title,img}:{title:string,img:string}) {
  return (
    <CardContainer className="p-0">
      <CardBody className="bg-gray-50 relative dark:hover:shadow-2xl dark:hover:shadow-red-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-fit w-fit rounded-xl border cursor-pointer">
        <CardItem          
          translateZ="100"
          className="w-full">
          <div className="relative">  
            <img src={img} alt=""className="relative"/>
            <div className="h-full w-full absolute top-0 left-0 bg-black bg-opacity-30 flex justify-center items-center">
              <h1 className="text-neutral-200 ">{title}</h1>
            </div>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default projectCard;
