import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link to={"/"}>
        <img
          src="logo-kyr.png"
          alt="openai"
          width={"150px"}
          height={"120px"}
          className="image-inverted"
        />
      </Link>{" "}
      <Typography
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          mr: "auto",
          fontWeight: "800",
          textShadow: "2px 2px 20px #000",
          fontSize:"5px"
        }}
      >
        <span style={{ fontSize: "40px" }}>Jurix</span>
      </Typography>
    </div>
  );
};

export default Logo;
