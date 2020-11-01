import breakfast from '@assets/images/breakfast.jpeg'
import morningSnack from '@assets/images/lanche-manha.jpg'
import lunch from '@assets/images/lunch.jpg'
import meal from '@assets/images/meal.jpeg'
import snack from '@assets/images/snack.jpg'
import supper from '@assets/images/supper.jpeg'
import Header from '@components/Header'
import Layout from '@containers/Layout'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import MealCard from './components/MealCard'

const useStyles = makeStyles((theme) => ({
  todaysMealHeader: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  mealCard: {
    maxWidth: 345,
    margin: 'auto',
    marginTop: theme.spacing(2),
  },
  media: {
    height: 140,
  },
}))

const HomePage = () => {
  const classes = useStyles()
  return (
    <Layout maxWidth="md">
      <Header title="Principal" />
      <Typography variant="body1">Bem vindo de volta Fulano!</Typography>

      <Typography className={classes.todaysMealHeader} variant="body2">
        Refeições de hoje
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <MealCard
            image={breakfast}
            title="Café da manhã"
            name="Café da manhã"
            recipe="Bolo de chocolate"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <MealCard
            image={morningSnack}
            title="Lanche da manhã"
            name="Lanche da manhã"
            recipe="Maçã"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MealCard
            image={lunch}
            title="Almoço"
            name="Almoço"
            recipe="Arroz à grega com frango grelhado"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MealCard
            image={snack}
            title="Lanche da tarde"
            name="Lanche da tarde"
            recipe="Cookie"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MealCard
            image={meal}
            title="Jantar"
            name="Jantar"
            recipe="Carne com legumes"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MealCard
            image={supper}
            title="Ceia"
            name="Ceia"
            recipe="Chá de hibisco"
          />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage
