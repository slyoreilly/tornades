import React, { useState, useEffect, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import '../App.css';
import { Button } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core'
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import { useTheme } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useTranslation } from 'react-i18next';
import Cookies from 'universal-cookie';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) { setValue(e.target.value); }
  return [value, handleChange];
}

const listeErreurs = [
  "Le numéro civique doit être un nombre",
  "Le Code Postal est invalide",
  "L'adresse courriel est invalide",
  "Le nom ne peut être nul",
  "Le prénom ne peut être nul",
  "La date de naissance est obligatoire",

]

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    textAlign: 'center',
    color: '#00FF00',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '1rem',
    justifyContent: 'flex-start'
  },
  rootMobile: {
    maxWidth: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem',
    justifyContent: 'flex-start'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    marginTop: '50px'
  },
  modal: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `$50%`,
    left: `$50%`,
    transform: `translate(-$50%, -$50%)`,

  },

  btnSuccess: {
    backgroundColor: theme.palette.success,
  },
  texteErreur: {
    color: theme.palette.error,
  },

}));



function Inscription(props) {


  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const theme = useTheme(props.theme);
  const { t, i18n } = useTranslation('Inscription');
  useEffect(() => {
  }, []);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [Prenom, setPrenom] = useInput('');
  const [Nom, setNom] = useInput('');
  const [Sexe, setSexe] = useInput('');
  const [AdresseNo, setAdresseNo] = useInput('');
  const [Rue, setRue] = useInput('');
  const [CodePostal, setCodePostal] = useInput('');
  const [DateDeNaissance, setDateDeNaissance] = useInput('');
  const [PrenomParent1, setPrenomParent1] = useInput('');
  const [PremiereFois, setPremiereFois] =  React.useState(false);
  const [NomParent1, setNomParent1] = useInput('');
  const [TelephoneParent1, setTelephoneParent1] = useInput('');
  const [CourrielParent1, setCourrielParent1] = useInput('');
  const [ImpliqueParent1, setImpliqueParent1] = React.useState(false);
  const [PrenomParent2, setPrenomParent2] = useInput('');
  const [NomParent2, setNomParent2] = useInput('');
  const [TelephoneParent2, setTelephoneParent2] = useInput('');
  const [CourrielParent2, setCourrielParent2] = useInput('');
  const [ImpliqueParent2, setImpliqueParent2] =  React.useState(false);
  const [PrenomUrgence, setPrenomUrgence] = React.useState('');
  const [NomUrgence, setNomUrgence] = React.useState('');
  const [TelephoneUrgence, setTelephoneUrgence] = React.useState('');
  const [CourrielImpots, setCourrielImpots] = useInput('');
  const [Commentaires, setCommentaires] = useInput('');
  const [JouerAutreEquipe, setJouerAutreEquipe] = React.useState(false);
  const [DerniereEquipe, setDerniereEquipe] =  useInput('');
  const [AnneeDerniereEquipe, setAnneeDerniereEquipe] = useInput('');
  const [copieParent, setCopieParent] = React.useState('0');
  const [estConfirme, setEstConfirme] = React.useState(false);
  const [estErreurConfirme, setEstErreurConfirme] = React.useState(false);
  const [erreurs, setErreurs] = React.useState([]);

  const handleOpen = () => {
    setOpen(true);
    checkData();
  };

  const handleClose = (event) => {
    setOpen(false);
    setErreurs([]);
  };

  const resetForm = () => {
    document.getElementById("maForme").reset();
  }

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);


  const checkData = () => {
    let mErreurs = [];
    if (!Number.isInteger(parseInt(AdresseNo)))
      mErreurs.push(0);
    //if(CodePostal.length>7||CodePostal.length<6)
    //mErreurs.push(1);
    try {



      if (((CourrielParent1.split('@')[1]).split('.')[1]).length <= 0)
        mErreurs.push(2);
    } catch (err) {
      mErreurs.push(2);
    }
    if (Nom.length < 1)
      mErreurs.push(3);
    if (Prenom.length < 1)
      mErreurs.push(4);
    if (DateDeNaissance.length < 1)
      mErreurs.push(5);
    setErreurs(mErreurs);
    return mErreurs.length > 0;

  }

  const handleWindowSizeChange = () => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  };
  const divPrincipale = {
    marginTop: 80,
    marginBottom: 80,
    margin: 'auto'

  }
  const styleForme = {
    marginTop: 80,
    paddingTop: 80,
    textAlign: "left",
  }
  const inputBox = {
    textAlign: 'right',
    float: 'right',

  }

  const titreSection = {
    textAlign: 'center',
  }





  function onSubmitForm() {
    fetch('/inscriptions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Prenom: Prenom,
        Nom: Nom,
        Sexe: Sexe,
        AdresseNo: parseInt(AdresseNo),
        Rue: Rue,
        CodePostal: CodePostal,
        DateDeNaissance: DateDeNaissance,
        DerniereEquipe: DerniereEquipe,
        AnneeDerniereEquipe: parseInt(AnneeDerniereEquipe),
        PermiereFois: PremiereFois,
        PrenomParent1: PrenomParent1,
        NomParent1: NomParent1,
        TelephoneParent1: TelephoneParent1,
        CourrielParent1: CourrielParent1,
        impliqueParent1: ImpliqueParent1,
        PrenomParent2: PrenomParent2,
        NomParent2: NomParent2,
        TelephoneParent2: TelephoneParent2,
        CourrielParent2: CourrielParent2,
        impliqueParent2: ImpliqueParent2,
        PrenomUrgence: PrenomUrgence,
        NomUrgence: NomUrgence,
        TelephoneUrgence: TelephoneUrgence,
        CourrielImpots: CourrielImpots,
        Commentaires: Commentaires,

      })
    }).then(res => {
      // Unfortunately, fetch doesn't send (404 error)
      // into the cache itself
      // You have to send it, as I have done below
      if (res.status >= 400) {
        setEstErreurConfirme(true);
      } else {
        setEstConfirme(true);
      }
    })
  }

  function changeLangue(lang) {
    var cookie = new Cookies();
    cookie.set("langue", lang);
    location.reload();
  }


  const setCopieParent2 = (e) => {
    parent = e.target.value;
    setCopieParent(parent);
    if (parent == "1") {
      setNomUrgence(NomParent1);
      setPrenomUrgence(PrenomParent1);
      setTelephoneUrgence(TelephoneParent1);
    } else {
      if (parent == "2") {
        setNomUrgence(NomParent2);
        setPrenomUrgence(PrenomParent2);
        setTelephoneUrgence(TelephoneParent2);
      } else {
        setNomUrgence('');
        setPrenomUrgence('');
        setTelephoneUrgence('');
      }

    }
  }







return (
  <div style={divPrincipale}>
    <Container >
      <Grid container spacing={8}>
        <Grid container item xs={12} md={6} spacing={2}>
          <Grid item xs={12} >
            <h4 style={titreSection}> Inclusions </h4></Grid>

          <Grid item xs={12} >

            <Card >

              <CardActionArea>

                <CardContent>


                  <List dense>


                    <ListItem>
                      <ListItemText
                        primary="Saison régulière" secondary="18 à 26 parties"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Entraînements"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Séries éliminatoires"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Tournoi" secondary="Novice à Midget"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Paire de bas"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Ensemble de chandails de parties"
                      />
                    </ListItem>

                  </List>

                </CardContent>
              </CardActionArea>

            </Card>

          </Grid>
        </Grid>
        <Grid container item xs={12} md={6} spacing={(5, 2)}>
          <Grid item xs={12}>
            <h4 style={titreSection}>Prix</h4> </Grid>
          <Grid item xs={12}>

            <Card >

              <CardActionArea>

                <CardContent>
                  <List dense>


                    <ListItem>
                      <ListItemText
                        primary="Pré-novice: 150$" secondary="2015-2016-2017"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Novice: 300$" secondary="2013-2014"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Atome: 300$" secondary="2011-2012"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Peewee: 300$" secondary="2009-2010"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Bantam: 300$" secondary="2007-2008"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Midget: 350$" secondary="2004-2005-2006"
                      />
                    </ListItem>

                  </List>

                </CardContent>
              </CardActionArea>

            </Card>


          </Grid>
        </Grid>

      </Grid>
    </Container>
    <Paper className={classes.paper} >
     





      
      <Container >

        {!estErreurConfirme && !estConfirme &&
          <form id="maForme" style={styleForme}>
             <button onClick={() => { changeLangue('fr') }}>FR</button><button onClick={() => { changeLangue('en') }}>EN</button>
            <Typography variant="h2" align="center">{t('TitreInscription')}</Typography>
            <Grid container spacing={8}>
              <Grid container item xs={12} md={6} spacing={2}>
                <Grid item xs={12} >
                  <h4 style={titreSection}> {t('Identite')} </h4></Grid>
                <Grid item xs={12}>
                  <TextField id="Nom" label={t('Nom')} value={Nom} onChange={setNom} fullWidth={true} />
                </Grid>
                <Grid item xs={12} >
                  <TextField id="Prenom" label={t('Prenom')} value={Prenom} onChange={setPrenom} fullWidth />
                </Grid>
                <Grid item xs={12}>
                <FormControl component="fieldset" fullwidth>
                    <FormLabel component="legend">{t('Sexe')}</FormLabel>
                    <RadioGroup aria-label="Sexe" name="Sexe" value={Sexe} onChange={setSexe} row>
                      <FormControlLabel value="M" control={<Radio />} label={t('Garcon')} />
                      <FormControlLabel value="F" control={<Radio />} label={t('Fille')} />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField id="AdresseNo" label={t('AdresseNo')} value={AdresseNo} type="number" onChange={setAdresseNo} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="Rue" label={t('Rue')} value={Rue} onChange={setRue} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="CodePostal" label={t('CodePostal')} value={CodePostal} onChange={setCodePostal} />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="DateDeNaissance" type="date" label={t('DateDeNaissance')} value={DateDeNaissance} onChange={setDateDeNaissance} fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={PremiereFois}
                        onChange={()=>{setPremiereFois(!PremiereFois)}}
                        name="PremiereFois"
                        color="primary"
                      />}
                    label={t('PremiereFois')}
                  /></Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={JouerAutreEquipe}
                        onChange={()=>{setJouerAutreEquipe(!JouerAutreEquipe)}}
                        name="JouerAutreEquipe"
                        color="primary"
                      />}
                    label={t('JouerAutreEquipe')}
                  /></Grid>
                {JouerAutreEquipe && <Grid item xs={12} md={6}>
                  <TextField id="AnneeDerniereEquipe" label={t('AnneeDerniereEquipe')} value={AnneeDerniereEquipe} onChange={setAnneeDerniereEquipe} />
                </Grid>}
                {JouerAutreEquipe && <Grid item xs={12} md={6}>
                  <TextField id="DerniereEquipe" label={t('DerniereEquipe')} value={DerniereEquipe} onChange={setDerniereEquipe} />
                </Grid>}

              </Grid>
              <Grid container item xs={12} md={6} spacing={(5, 2)}>
                <Grid item xs={12} >
                  <h4 style={titreSection}>{t('Parent')} 1</h4> </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="NomParent1" label={t('Nom')} value={NomParent1} onChange={setNomParent1} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="PrenomParent1" label={t('Prenom')} value={PrenomParent1} onChange={setPrenomParent1} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="TelephoneParent1" label={t('Telephone')} value={TelephoneParent1} onChange={setTelephoneParent1} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="CourrielParent1" label={t('Courriel')} value={CourrielParent1} onChange={setCourrielParent1} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={ImpliqueParent1}
                        onChange={()=>{setImpliqueParent1(!ImpliqueParent1)}}
                        name="ImpliqueParent1"
                        color="primary"
                      />}
                    label={t('Implique')}
                  /></Grid>

                <Grid item xs={12} >
                  <h4 style={titreSection}>{t('Parent')} 2</h4> </Grid>

                <Grid item xs={12} md={6}>
                  <TextField id="NomParent2" label={t('Nom')} value={NomParent2} onChange={setNomParent2} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="PrenomParent2" label={t('Prenom')} value={PrenomParent2} onChange={setPrenomParent2} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="TelephoneParent2" label={t('Telephone')} value={TelephoneParent2} onChange={setTelephoneParent2} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="CourrielParent2" label={t('Courriel')} value={CourrielParent2} onChange={setCourrielParent2} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={ImpliqueParent2}
                        onChange={()=>{setImpliqueParent2(!ImpliqueParent2)}}
                        name="ImpliqueParent2"
                        color="primary"
                      />}
                    label={t('Implique')}
                  /></Grid>

                <Grid item xs={12} >
                  <h4 style={titreSection}>{t('CasUrgence')}</h4> </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset" fullwidth>
                    <FormLabel component="legend">Pre-filled</FormLabel>
                    <RadioGroup aria-label="copyParent" name="copieParent" value={copieParent} onChange={setCopieParent2} row>
                      <FormControlLabel value="1" control={<Radio />} label={t('Parent') + "1"} />
                      <FormControlLabel value="2" control={<Radio />} label={t('Parent') + "2"} />
                      <FormControlLabel value="0" control={<Radio />} label={t('Autre')} />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="NomUrgence" label={t('Nom')} value={NomUrgence} onChange={setNomUrgence} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="PrenomUrgence" label={t('Prenom')} value={PrenomUrgence} onChange={setPrenomUrgence} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="TelephoneUrgence" label={t('Telephone')} value={TelephoneUrgence} onChange={setTelephoneUrgence} />
                </Grid>
                <Grid item xs={12}>
                  <ul>
                    <li>
                      Un premier paiement de 50% pourra être fait par chèque, virement Interac ou en comptant.
                    </li>
                    <li>
                      Le second paiement de 50% pourra être fait au plus tard le 15 octobre.
                    </li>
                    <li>
                    Une preuve de résidence (autre que permis de conduire) et de date de naissance vous sera demandé (obligatoire)
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={12}>
                <a href='./../../files/termesEtConditions_v2.pdf' download>Termes et conditions</a>
               
                </Grid>
              </Grid>

              <Grid container item xs={12} md={6} spacing={(5, 2)}>
                <Grid item xs={12} >
                  <h4 style={titreSection}>{t('AutresInfos')} </h4> </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="CourrielImpots" label={t('CourrielImpots')} value={CourrielImpots} onChange={setCourrielImpots} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="Commentaires" label={t('Commentaires')} value={Commentaires} onChange={setCommentaires} />
                </Grid>
                <Grid item xs={12} md={6}>
                <Button
        variant="contained"
        color="primary"
        className={classes.button}
       
        disabled={erreurs.length}   startIcon={<SaveIcon />} onClick={handleOpen}
      >
       {t('Soumettre')}
      </Button>

                  <Modal disableEnforceFocus
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    <div className={classes.modal}>
                      {erreurs.length == 0 ?
                        <div>
                          <h2 id="simple-modal-title">Confirmation de l'inscription</h2>
                          <p id="simple-modal-description">
                            {t('DemandeConfirme')}
                          </p>
                        </div>
                        :
                        <div>
                          <h2 id="simple-modal-title">Un petit instant...</h2>
                          <p id="simple-modal-description">
                            {t('DetailErreurs')}
                          </p>
                          <List dense>
                            {erreurs.map(erreur =>
                            (
                              <ListItem>
                                <ListItemText
                                  primary={listeErreurs[erreur]}
                                />
                              </ListItem>
                            ))}
                          </List>


                        </div>}

                     { <input type="button" className={classes.btnSuccess} disabled={erreurs.length} value={t('Confirmer')} onClick={() => { onSubmitForm(); handleClose(); }} />}
                      <input type="button" className={classes.btnSuccess} value={erreurs.length == 0 ? t('Annuler') : t('Corriger')} onClick={() => { handleClose(); }} />
                      <input type="reset" className={classes.btnSuccess} value={t('Recommencer')} onClick={() => { resetForm(); handleClose(); }} />
                    </div>
                  </Modal>
                </Grid>
              </Grid>


            </Grid>
          </form>}

        {estConfirme && <p class="mt-3">{t('InscriptionOK')}</p>}

        {estErreurConfirme && <p class="mt-3">{t('InscriptionPasOK')} <a href="mailto:ahmvtornade@hotmail.com">ahmvtornade@hotmail.com</a></p>}

      </Container>



    </Paper>
  </div >
);

}



export default Inscription;
