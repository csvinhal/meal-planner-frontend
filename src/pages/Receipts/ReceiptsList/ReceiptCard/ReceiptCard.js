import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import PropTypes from "prop-types";
import imageNotFound from "../../../../assets/images/image-not-found.svg";
import { useHistory, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
      backgroundColor: theme.palette.background.default,
      backgroundPosition: "bottom center",
      backgroundSize: "contain",
    },
  })
);

const ReceiptCard = ({ receipt }) => {
  const classes = useStyles();
  const { path } = useRouteMatch();
  const history = useHistory();

  const handleEdit = () => {
    history.push(`${path}/${receipt.id}`);
  };

  const handleRemove = () => {
    alert("Removeu");
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageNotFound}
          title={`Receita de ${receipt.receiptName}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {receipt.receiptName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleEdit}>
          Editar
        </Button>
        <Button size="small" color="primary" onClick={handleRemove}>
          Remover
        </Button>
      </CardActions>
    </Card>
  );
};

ReceiptCard.propTypes = {
  receipt: PropTypes.shape({
    id: PropTypes.string,
    receiptName: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default ReceiptCard;
