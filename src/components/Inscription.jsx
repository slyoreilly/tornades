import React, { useState, useEffect,useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import '../App.css';
import {Button} from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import {TextField} from '@material-ui/core'
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

function getModalStyle() {
  const top = 50;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function useInput(initialValue){
  const [value,setValue] = useState(initialValue);
   function handleChange(e){        setValue(e.target.value);    }
  return [value,handleChange];
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
      textAlign:'center',
      display: 'flex',
      flexDirection: 'row',
      marginTop:'1rem',
      justifyContent: 'flex-start'
    },
    rootMobile: {
      maxWidth: '100%',
      textAlign:'center',
      display: 'flex',
      flexDirection: 'column',
      marginTop:'1rem',
      justifyContent: 'flex-start'
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },

    btnSuccess:{
      backgroundColor: theme.palette.success,
    },
    texteErreur:{
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
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [Prenom, setPrenom] = useInput('')
    const [Telephone, setTelephone] = useInput('')
    const [Nom, setNom] = useInput('')
    const [Sexe, setSexe] = useInput('')
    const [Courriel, setCourriel] = useInput('')
    const [AdresseNo, setAdresseNo] = useInput('')
    const [Rue, setRue] = useInput('')
    const [CodePostal, setCodePostal] = useInput('')
    const [TelPere, setTelPere] = useInput('')
    const [NomPere, setNomPere] = useInput('')
    const [NomMere, setNomMere] = useInput('')
    const [TelMere, setTelMere] = useInput('')
    const [TelUrgence, setTelUrgence] = useInput('')
    const [NomUrgence, setNomUrgence] = useInput('')
    const [LienUrgence, setLienUrgence] = useInput('')
    const [CourrielImpots, setCourrielImpots] = useInput('')
    const [Commentaires, setCommentaires] = useInput('')
    const [NoAssMaladie, setNoAssMaladie] = useInput('')
    const [DateDeNaissance, setDateDeNaissance] = useInput('')
    const [DerniereEquipe, setDerniereEquipe] = useInput('')
    const [AnneeDerniereEquipe, setAnneeDerniereEquipe] = useInput('')
    const [Cellulaire, setCellulaire] = useInput('')
    const [estConfirme, setEstConfirme] = React.useState(false);
    const [estErreurConfirme, setEstErreurConfirme] = React.useState(false);
    const [erreurs, setErreurs] = React.useState([])

  const handleOpen = () => {
    setOpen(true);
    checkData();
  };

  const handleClose = (event) => {
    setOpen(false);
  };

const resetForm =()=>{
  document.getElementById("maForme").reset(); 
}

    useEffect(() => {
      handleWindowSizeChange();
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
    }, []);


     const checkData = () =>{
      let mErreurs = [];
      if(!Number.isInteger(parseInt(AdresseNo)))
      mErreurs.push(0);
      //if(CodePostal.length>7||CodePostal.length<6)
      //mErreurs.push(1);
      try{

        console.log(Courriel);
        console.log(Courriel.split('@'));
        console.log((Courriel.split('@'))[1]);
        console.log((Courriel.split('@')[1]).split('.'));
        console.log(((Courriel.split('@')[1]).split('.')[1]));
        
      if(((Courriel.split('@')[1]).split('.')[1]).length<=0)
      mErreurs.push(2);    
    }catch(err){
        mErreurs.push(2);
      }
      if(Nom.length<1)
      mErreurs.push(3);
      if(Prenom.length<1)
      mErreurs.push(4);
      if(DateDeNaissance.length<1)
      mErreurs.push(5);
      setErreurs(mErreurs);
  return mErreurs.length>0;
  
    }

    const handleWindowSizeChange = () => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
      };
      const divPrincipale= {
        marginTop: 80,
        margin:'auto'
        
      }
      const styleForme= {
        marginTop: 80,
        textAlign:"left",
      }
      const inputBox= {
        textAlign:'right',
        float:'right',
        
        }

        const  titreSection={
          textAlign:'center',
        }


     


      function onSubmitForm() {
        fetch('http://localhost:1337/joueurs', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    Nom: Nom,
    Prenom: Prenom,
    Courriel: Courriel,
    Telephone: Telephone,
    Sexe: Sexe,
    AdresseNo: parseInt(AdresseNo),
    Rue: Rue,
    CodePostal: CodePostal,
    Cellulaire: Cellulaire,
    TelUrgence: TelUrgence,
    NomUrgence: NomUrgence,
    LienUrgence: LienUrgence,
    DateDeNaissance: DateDeNaissance,
    NoAssMaladie: NoAssMaladie,
    DerniereEquipe: DerniereEquipe,
    AnneeDerniereEquipe: parseInt(AnneeDerniereEquipe),
    NomPere: NomPere,
    TelPere: TelPere,
    NomMere: NomMere,
    CourrielImpots: CourrielImpots,
    Commentaires: Commentaires,
    APaye: false,
    
  })
}).then(res => {
  // Unfortunately, fetch doesn't send (404 error)
  // into the cache itself
  // You have to send it, as I have done below
  if (res.status >= 400) {
      setEstErreurConfirme(true);
  }else{
    setEstConfirme(true);   
  }
})
}
    
function changeLangue(lang) {
  var cookie = new Cookies();
  cookie.set("langue",lang);
  location.reload();
}








    return (
      <Paper style={divPrincipale}>
        <button onClick={()=>{changeLangue('fr')}}>FR</button><button onClick={()=>{changeLangue('en')}}>EN</button>





<Typography variant="h2">{t('TitreInscription')}</Typography>
<Container >
{!estErreurConfirme && !estConfirme &&
 <form id="maForme" style={styleForme}>
<Grid  container spacing={8}>
<Grid container item xs={12} md={6}  spacing={2}>
    <Grid item xs={12} >
        <h4 style={titreSection}> {t('Identite')} </h4></Grid>
    <Grid item xs={12} md={6} >
      <TextField id="Prenom" label={t('Prenom')} value={Prenom} onChange={setPrenom} />
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField id="Nom" label={t('Nom')} value={Nom} onChange={setNom} />
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField id="Sexe" label={t('Sexe')} value={Sexe} onChange={setSexe} />
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField id="Telephone" label={t('Telephone')} value={Telephone} onChange={setTelephone} />
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField id="Courriel" label={t('Courriel')} value={Courriel} onChange={setCourriel} />
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField id="DateDeNaissance" type="date" label={t('DateDeNaissance')} value={DateDeNaissance} onChange={setDateDeNaissance} />
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField id="NoAssMaladie" label={t('NoAssMaladie')} value={NoAssMaladie} onChange={setNoAssMaladie} />
    </Grid>
    </Grid>
  <Grid container item xs={12} md={6} spacing={(5,2)}>
      <Grid item xs={12}>
        <h4 style={titreSection}> {t('Adresse')} </h4> </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="AdresseNo" label={t('AdresseNo')} value={AdresseNo} type="number"  onChange={setAdresseNo} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="Rue" label={t('Rue')} value={Rue} onChange={setRue} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="CodePostal" label={t('CodePostal')} value={CodePostal} onChange={setCodePostal} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="Cellulaire" label={t('Cellulaire')} value={Cellulaire} onChange={setCellulaire} />
      </Grid>
    </Grid>
    <Grid container  item xs={12} md={6} spacing={(5,2)}>
      <Grid item xs={12} >
        <h4 style={titreSection}>{t('Contact')} </h4> </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="NomPere" label={t('NomPere')} value={NomPere} onChange={setNomPere} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="TelPere" label={t('TelPere')} value={TelPere} onChange={setTelPere} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="NomMere" label={t('NomMere')} value={NomMere} onChange={setNomMere} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="TelMere" label={t('TelMere')} value={TelMere} onChange={setTelMere} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="TelUrgence" label={t('TelUrgence')} value={TelUrgence} onChange={setTelUrgence} />
     </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="NomUrgence" label={t('NomUrgence')} value={NomUrgence} onChange={setNomUrgence} />
      </Grid>
      <Grid item xs={12} md={6}>
      <TextField id="LienUrgence" label={t('LienUrgence')} value={LienUrgence} onChange={setLienUrgence} />
     </Grid>

    </Grid>
      
    <Grid container  item xs={12} md={6} spacing={(5,2)}>
      <Grid item xs={12} >
        <h4 style={titreSection}>{t('Autres Infos')} </h4> </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="DerniereEquipe" label={t('DerniereEquipe')} value={DerniereEquipe} onChange={setDerniereEquipe} />
      </Grid>
      <Grid item xs={12} md={6}>
      <TextField id="AnneeDerniereEquipe" label={t('AnneeDerniereEquipe')} value={AnneeDerniereEquipe} onChange={setAnneeDerniereEquipe} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="CourrielImpots" label={t('CourrielImpots')} value={CourrielImpots} onChange={setCourrielImpots} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="Commentaires" label={t('Commentaires')} value={Commentaires} onChange={setCommentaires} />
     </Grid>
      <Grid item xs={12} md={6}>
      <input type="button" onClick={handleOpen} className={classes.btnSuccess} value={t('Soumettre')}/>


      <Modal disableEnforceFocus
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
    <div style={modalStyle} className={classes.paper}>
    {erreurs.length ==0?
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

            <input type="button"  className={classes.btnSuccess} disabled={erreurs.length} value={t('Confirmer')} onClick={()=>{onSubmitForm();handleClose();}}/>
            <input type="button"  className={classes.btnSuccess} value={erreurs.length==0?t('Annuler'):t('Corriger')} onClick={()=>{handleClose();}}/>
            <input type="reset"  className={classes.btnSuccess} value={t('Recommencer')} onClick={()=>{resetForm();handleClose();}}/>
          </div>
      </Modal>
      </Grid> </Grid> 

      
       </Grid>
    </form>}

{estConfirme && <h2>Tout est beau, on s'en reparle</h2>}

{estErreurConfirme && <h2>Problème... veuillez recommmencer ou nous</h2>}

    </Container>



</Paper>
 );

}



export default Inscription;
