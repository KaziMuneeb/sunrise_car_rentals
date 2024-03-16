import Image from "next/image";

function Logo({ width, height, type = "normal" }) {
  return (
    <Image
      src={type === "small" ? "/images/logo-small.png" : "/images/logo.svg"}
      alt="logo"
      width={width}
      height={height}
    />
  );
}

export default Logo;
