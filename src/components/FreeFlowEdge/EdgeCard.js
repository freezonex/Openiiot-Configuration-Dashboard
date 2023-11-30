import React from "react";
import Card from "@mui/material/Card";
import Image from "next/image";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NoderedIcon from "../NoderedIcon";
import NoderedImage from "@/static/image/NoderedPic.png";

const EdgeCard = (props) => {
  const { heading, text, url, handleDeleteItem } = props;
  const handleOpenSite = (url) => {
    window.open(url, "_blank");
  };
  const onDeleteClick = (url) => {
    handleDeleteItem(url);
  };
  return (
    <Card>
      <Image
        alt="Random image"
        src={NoderedImage}
        style={{
          maxWidth: "100%",
          height: "100px",
          objectFit: "cover",
        }}
      />
      <CardContent>
        <NoderedIcon />
        <Typography variant="h5">{heading}</Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {text}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          IP address: {url}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleOpenSite(url)}>Go to NodeRed</Button>
        <Button onClick={() => onDeleteClick(url)}>Delete</Button>
      </CardActions>
    </Card>
  );
};
export default EdgeCard;

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(EdgeCard);
