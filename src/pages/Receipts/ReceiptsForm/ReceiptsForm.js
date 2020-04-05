import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  createReceipt,
  getReceipt,
  updateReceipt,
} from "../../../shared/receiptApi";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      maxWidth: 560,
    },
  },
  form: {
    marginTop: theme.spacing(2),
  },
  buttonContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  buttonBack: {
    marginLeft: theme.spacing(2),
  },
}));

const validate = (values) => {
  const errors = {};
  if (!values.receiptName) {
    errors.receiptName = "O campo é obrigatório";
  }

  return errors;
};

const ReceiptsForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getReceipt(id).then((response) => formik.setValues(response.data));
    }
  }, []);

  const goBack = () => {
    history.push("/receipts");
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      receiptName: "",
    },
    validate,
    onSubmit: async (values) => {
      if (id) {
        try {
          const data = await updateReceipt(id, values);
          goBack();
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          const data = await createReceipt(values);
          goBack();
        } catch (err) {
          console.log(err);
        }
      }
    },
  });

  return (
    <Paper className={classes.paper}>
      <Typography variant="h3" component="h1">
        Receitas
      </Typography>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl
              fullWidth
              error={formik.touched.receiptName && !!formik.errors.receiptName}
            >
              <InputLabel htmlFor="ff-name">Nome da receita</InputLabel>
              <Input
                id="ff-name"
                name="receiptName"
                aria-describedby="ht-name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.receiptName}
              />
              {formik.touched.receiptName && formik.errors.receiptName ? (
                <FormHelperText id="ht-name" error>
                  {formik.errors.receiptName}
                </FormHelperText>
              ) : null}
            </FormControl>
          </Grid>
        </Grid>
        <div className={classes.buttonContainer}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Salvar
          </Button>
          <Button
            type="button"
            color="primary"
            className={classes.buttonBack}
            onClick={goBack}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default ReceiptsForm;
