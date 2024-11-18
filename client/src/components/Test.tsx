import React from "react";

import { homeText } from "@/constants";
const Test = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col min-h-screen relative w-full">
        <div className="absolute inset-0 w-full h-full">
          <video
            src={
              "https://isgaconsult.com/wp-content/uploads/2024/02/video-2160p.mp4"
            }
            controls={false}
            muted
            loop
            autoPlay
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-3 text-white p-4">
          <h1 className="font-semibold text-xl md:text-3xl">
            {homeText.title}
          </h1>
          <h5 className="font-semibold text-md md:text-2xl">
            {homeText.subtitle}
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tellus nulla, ornare ut volutpat id, gravida at dolor. Cras
            hendrerit faucibus metus eu feugiat. Pellentesque scelerisque erat
            eget dui consectetur consequat. Pellentesque in mi vitae lorem
            lobortis scelerisque nec nec odio. Suspendisse pretium sagittis
            ullamcorper. Curabitur rhoncus, urna eget ullamcorper mattis, dolor
            magna vulputate ipsum, eu pellentesque enim erat et dolor.
            Vestibulum pulvinar gravida erat, sit amet lobortis nunc molestie
            nec. Aenean at luctus mauris, quis tincidunt purus. Vivamus varius
            imperdiet eros. Phasellus viverra suscipit nisl ac ornare. Proin
            vitae sapien sit amet urna commodo tristique. Integer lacinia lacus
            tortor, quis fermentum felis accumsan sed. Nullam a porttitor ante.
            Etiam consectetur felis diam, quis fringilla lacus maximus ac.
            Mauris in eros nec justo viverra hendrerit. Aliquam posuere, felis
            porttitor sagittis porttitor, lectus orci lobortis ante, non mattis
            ante dui vitae metus. Integer rutrum magna massa, non pharetra leo
            semper id. Curabitur porttitor consequat sodales. Duis tellus magna,
            condimentum nec finibus sed, tempor nec ligula. Nunc euismod iaculis
            rutrum. Morbi in egestas lacus. Nunc tempor, sem nec condimentum
            gravida, felis purus cursus dui, sed commodo metus nulla quis augue.
            Proin lacinia mattis massa, a feugiat purus. Sed accumsan pretium
            feugiat. Pellentesque laoreet est id arcu pellentesque sollicitudin.
            Aliquam pharetra placerat urna, at scelerisque metus vulputate eu.
            Cras dignissim augue non vestibulum lacinia. Duis feugiat aliquet
            lorem, et efficitur dolor viverra id. Maecenas gravida ante sit amet
            libero ultrices, vitae vestibulum odio euismod. Integer luctus
            facilisis sapien, eget pharetra ligula.
          </p>
        </div>
      </div>
      <p>test</p>
    </div>
  );
};

export default Test;
