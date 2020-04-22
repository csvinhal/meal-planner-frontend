import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import breakfast from "../../assets/images/breakfast.jpeg";
import morningSnack from "../../assets/images/lanche-manha.jpg";
import lunch from "../../assets/images/lunch.jpg";
import meal from "../../assets/images/meal.jpeg";
import snack from "../../assets/images/snack.jpg";
import supper from "../../assets/images/supper.jpeg";
import Header from "../../components/Header/Header";
import Layout from "../../hoc/Layout";

const useStyles = makeStyles((theme) => ({
  todaysMealHeader: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  mealCard: {
    maxWidth: 345,
    margin: "auto",
    marginTop: theme.spacing(2),
  },
  media: {
    height: 140,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className="page">
      <Layout>
        <Header title="Principal" />
        <Typography variant="body1">Bem vindo de volta Fulano!</Typography>

        <Typography className={classes.todaysMealHeader} variant="body2">
          Refeições de hoje
        </Typography>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card className={classes.mealCard}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={breakfast}
                title="Café da manhã"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Café da manhã
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Bolo de chocolate
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className={classes.mealCard}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={morningSnack}
                title="Lanche da manhã"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lanche da manhã
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Maçã
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className={classes.mealCard}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={lunch}
                title="Almoço"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Almoço
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Arroz à grega com frango grelhado
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className={classes.mealCard}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={snack}
                title="Lanche da tarde"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lanche da tarde
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Cookie
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className={classes.mealCard}>
            <CardActionArea>
              <CardMedia className={classes.media} image={meal} title="Jantar" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Jantar
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Carne com legumes
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className={classes.mealCard}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={supper}
                title="Ceia"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Ceia
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Chá de hibisco
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Layout>
    </div>
  );
};

export default Home;
