import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import signIn from '../../../image/postman/signIn.png';
import signOut from '../../../image/postman/signOut.png';
import signOutAll from '../../../image/postman/signOutAll.png';
import accountPost from '../../../image/postman/accountPost.png';
import accountPut from '../../../image/postman/accountPut.png';
import accountDelete from '../../../image/postman/accountDelete.png';
import business from '../../../image/postman/business.png';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

function getSteps() {
    return ['Registar empresa', 'Obtener credenciales', 'Eliminar credenciales', 'CRUD cuenta', 'Obtener empresa', 'CRUD Marcaje', 'Final'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return(
                <Fragment>
                    <Typography>
                        Para comenzar nuestra api es necesario que su empresa este registrada en nuestro sistema, 
                        <b> si no</b> haz registrado tu empresa todavia puedes ponerte en contacto con uno de nuestros
                        ejecutivos.
                    </Typography>
                    <br />
                    <Typography><b>Telefono:</b> +56 22 246 9178</Typography>
                    <Typography><b>Correo:</b> hola@scmconsultores.cl</Typography>
                    <br />
                    <Typography>
                        Como medida de seguridad nuestra API es <b>privada</b>, por lo cual debera hacer inicio de sesión con un 
                        usuario registrado para obtener las credenciales.
                    </Typography>
                    <br />
                    <Typography>
                        Recuerda que tras registrar tu empresa nuestro ejecutivo te entrego una cuenta con rol <b>manager</b>.
                    </Typography>
                    <br />
                </Fragment>
            )
        case 1:
            return (
                <Fragment>
                    <Typography>
                        Los siguientes pasos seran tecnicos pongase en contacto con su equipo de desarrollo 
                        para la implementación de la API.
                    </Typography>
                    <br />
                    <Typography>
                        <b>Sign-In</b><b style={{color: '#ffc107'}}> POST</b>
                    </Typography>
                    <br />
                    <img src={signIn} alt={''} style={{width: '100%'}}/>
                    <br />
                    <br />
                    <Typography>
                        Esta llamada te entregara un <b>token de autenticación</b> que sera <b>necesario</b> para todas las 
                        peticiones https restantes. 
                    </Typography>
                    <br />
                    <Typography>
                        En el body de la petición tienen que ir los siguientes parametros: (username, password)
                    </Typography>
                    <br />
                </Fragment>
            );
        case 2:
            return (
                <Fragment>
                    <Typography>
                        Las credenciales de los usuarios son <b>eliminadas</b> cuando cumplen una semana de creación o cuando se hace un Sign-Out.
                    </Typography>
                    <br />
                    <Typography>
                        <b>Sign-Out</b><b style={{color: '#ffc107'}}> POST</b>
                    </Typography>
                    <br />
                    <img src={signOut} alt={''} style={{width: '100%'}}/>
                    <br />
                    <Typography>
                        <b>Sign-Out all</b><b style={{color: '#ffc107'}}> POST</b>
                    </Typography>
                    <br />
                    <img src={signOutAll} alt={''} style={{width: '100%'}}/>
                    <br />
                    <Typography>
                        Estas llamadas eliminaran el <b>token de autenticación</b>. 
                    </Typography>
                    <br />
                    <Typography>
                        En el headers tendras que agregar el parametro "Authorization" y asignarle el valor "Token 'valor_token'"
                    </Typography>
                    <br />
                </Fragment>
            );
        case 3:
            return(
                <Fragment>
                    <Typography>
                        Hasta ahora deberiamos tener el sistema a autenticación ya creado por lo cual podemos empezar a crear las cuentas de los empleados.
                    </Typography>
                    <br />
                    <Typography>
                        <b>Account</b><b style={{color: '#4caf50'}}> GET</b>
                        <br />
                        <br />
                        Actualmente esta API no esta implementada.
                    </Typography>
                    <br />
                    <Typography>
                        <b>Account</b><b style={{color: '#ffc107'}}> POST</b>
                    </Typography>
                    <br />
                    <img src={accountPost} alt={''} style={{width: '100%'}}/>
                    <br />
                    <Typography>
                        En el headers tendras que agregar el parametro "Authorization" y asignarle el valor "Token 'valor_token'"
                    </Typography>
                    <br />
                    <Typography>
                        En el body de la petición tienen que ir los siguientes parametros: (username, first_name, last_name, email, avatar, role, businessId)
                    </Typography>
                    <br />
                    <Typography>
                        <b>Account</b><b style={{color: '#2196f3'}}> PUT</b>
                    </Typography>
                    <br />
                    <img src={accountPut} alt={''} style={{width: '100%'}}/>
                    <br />
                    <Typography>
                        En el headers tendras que agregar el parametro "Authorization" y asignarle el valor "Token 'valor_token'"
                    </Typography>
                    <br />
                    <Typography>
                        En el body de la petición tienen que ir los siguientes parametros: (username, first_name, last_name, email, avatar, role, businessId)
                    </Typography>
                    <br />
                    <Typography>
                        <b>Account</b><b style={{color: '#f44336'}}> DELETE</b>
                    </Typography>
                    <br />
                    <img src={accountDelete} alt={''} style={{width: '100%'}}/>
                    <Typography>
                        esta acción eliminara de forma <b>permanente</b> la cuenta y no podra ser recuperada.
                    </Typography>
                    <br />
                    <Typography>
                        En el headers tendras que agregar el parametro "Authorization" y asignarle el valor "Token 'valor_token'"
                    </Typography>
                    <br />
                    <Typography>
                        En el body de la petición tienen que ir los siguientes parametros: (username)
                    </Typography>
                    <br />
                </Fragment>
            )
        case 4:
            return(
                <Fragment>
                    <Typography>
                        Esta API se encarga de traer la información basica de la empresa y traer las cuentas de usuario relacionadas.
                    </Typography>
                    <br />
                    <Typography>
                        <b>Business</b><b style={{color: '#4caf50'}}> GET</b>
                    </Typography>
                    <br />
                    <img src={business} alt={''} style={{width: '100%'}}/>
                    <br />
                    <Typography>
                        En el headers tendras que agregar el parametro "Authorization" y asignarle el valor "Token 'valor_token'"
                    </Typography>
                    <br />
                </Fragment>
            )
        case 5:
            return(
                <Fragment>
                    <br />
                    <Typography>
                        <b>Mark</b><b style={{color: '#4caf50'}}> GET</b>
                    </Typography>
                    <br />
                    <Typography>
                        Esta api se encarga de realizar multiples consultas relacionadas con los marcajes, entregale uno de estos parametros por la url (marking schedule attendance).
                    </Typography>
                    <br />
                    <Typography>
                        <b>Mark</b><b style={{color: '#ffc107'}}> POST</b>
                    </Typography>
                    <br />
                    <Typography>
                        Esta api se encarga de abrir un marcaje y cerrarlo.
                    </Typography>
                    <br />
                </Fragment>
            )
        case 6:
            return(
                <Fragment>
                    <br />
                    <Typography>
                        Felicitaciones, llegaste al final! recuerda que si tienes algun problema con la implementación 
                        puedes agendarnos una consulta tecnica.
                    </Typography>
                </Fragment>
            )
        default:
            return 'Unknown step';
    }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const goingTo = () => {
    window.location.href = '/'
  }

  return (
    <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                        {getStepContent(index)}
                        <div className={classes.actionsContainer}>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.button}
                                >
                                    Atras
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={goingTo}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                                </Button>
                            </div>
                        </div>
                    </StepContent>
                </Step>
            ))}
        </Stepper>
        {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>All steps completed - you&apos;re finished</Typography>
                <Button onClick={handleReset} className={classes.button}>
                    Reset
                </Button>
            </Paper>
        )}
    </div>
  );
}