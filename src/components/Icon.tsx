
export type IconProps = {
  icon: string
  width?: number
  height?: number,
  stroke?: string,
  color?: string,
  className?: string,
}

function Icon({ icon, width, height, stroke, color, className }: IconProps) {


  

  const bed = (
    <svg className={className}
      viewBox="0 0 20 16"
      width={width ? width : 20}
      height={height ? height : 16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="Icon_Stay_Hotel" data-name="Icon/Stay/Hotel" transform="translate(-61 -32)">
        <g id="Icon">
          <path id="Shape" d="M63.583,48H61V32h1.969v9.035h7.879V34.007h6.212A3.983,3.983,0,0,1,81,38.023V48H78.25V44.047H63.583V48Zm3.326-8.911a3.012,3.012,0,1,1,2.955-3.011A2.987,2.987,0,0,1,66.909,39.09Z" fill={color} />
        </g>
      </g>
    </svg>
  );


  switch (icon) {
    case "bed":
      return bed;



    default:
      return null;
  }
}



//default look of our icons
//pass width, height and stroke props to override these
Icon.defaultProps = {
  width: "24",
  height: "24",
  stroke: "#000",
  color: "#399AB3"
};

export default Icon;
