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
    media: {
      height:320,
      maxWidth:480,
      textAlign:'center',
      flex: '1 0 auto',
    },
    mediaMobile: {
      textAlign:'center',
      height: 320,
      width: '100%' ,
      flex:"1 0 auto",
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
      if(!Number.isInteger(AdresseNo))
      mErreurs.push(0);
      if(CodePostal.length>7||CodePostal.length<6)
      mErreurs.push(1);
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
    AdresseNo: AdresseNo,
    Rue: Rue,
    CodePostal: CodePostal,
    Cellulaire: Cellulaire,
    TelUrgence: TelUrgence,
    NomUrgence: NomUrgence,
    LienUrgence: LienUrgence,
    DateDeNaissance: DateDeNaissance,
    NoAssMaladie: NoAssMaladie,
    DerniereEquipe: DerniereEquipe,
    AnneeDerniereEquipe: AnneeDerniereEquipe,
    NomPere: NomPere,
    TelPere: TelPere,
    NomMere: NomMere,
    CourrielImpots: CourrielImpots,
    Commentaires: Commentaires,
    APaye: false,
    
  })
})
}
    
      

      


    return (
<Paper >
<Typography variant="h2">Formulaire d'inscription</Typography>
<Container maxWidth={false} > 

<form id="maForme" } style={divPrincipale}>
<Grid  container spacing={8}>
<Grid container item xs={12} md={6}  spacing={2}>
    <Grid item xs={12} >
        <h4 style={titreSection}> Identité</h4></Grid>
    <Grid item xs={12} md={6} >
      <TextField id="Prenom" label="Prénom" value={Prenom} onChange={setPrenom} />
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField id="Nom" label="Nom" value={Nom} onChange={setNom} />
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField id="Sexe" label="Sexe" value={Sexe} onChange={setSexe} />
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField id="Telephone" label="Telephone" value={Telephone} onChange={setTelephone} />
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField id="Courriel" label="Courriel" value={Courriel} onChange={setCourriel} />
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField id="DateDeNaissance" type="date" label="Date de naissance" value={DateDeNaissance} onChange={setDateDeNaissance} />
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField id="NoAssMaladie" label="No assurance maladie" value={NoAssMaladie} onChange={setNoAssMaladie} />
    </Grid>
    </Grid>
  <Grid container item xs={12} md={6} spacing={(5,2)}>
      <Grid item xs={12}>
        <h4 style={titreSection}> Adresse:</h4> </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="AdresseNo" label="Numéro" value={AdresseNo} onChange={setAdresseNo} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="Rue" label="Rue" value={Rue} onChange={setRue} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="CodePostal" label="CodePostal" value={CodePostal} onChange={setCodePostal} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="Cellulaire" label="Cellulaire" value={Cellulaire} onChange={setCellulaire} />
      </Grid>
    </Grid>
    <Grid container  item xs={12} md={6} spacing={(5,2)}>
      <Grid item xs={12} >
        <h4 style={titreSection}>Contact</h4> </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="NomPere" label="Nom du pere" value={NomPere} onChange={setNomPere} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="TelPere" label="Téléphone (père)" value={TelPere} onChange={setTelPere} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="NomMere" label="Nom de la mère" value={NomMere} onChange={setNomMere} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="TelMere" label="Téléphone (mère)" value={TelMere} onChange={setTelMere} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="TelUrgence" label="Téléphone urgence" value={TelUrgence} onChange={setTelUrgence} />
     </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="NomUrgence" label="Nom (urgence)" value={NomUrgence} onChange={setNomUrgence} />
      </Grid>
      <Grid item xs={12} md={6}>
      <TextField id="LienUrgence" label="Lien" value={LienUrgence} onChange={setLienUrgence} />
     </Grid>

    </Grid>
      
    <Grid container  item xs={12} md={6} spacing={(5,2)}>
      <Grid item xs={12} >
        <h4 style={titreSection}>Autres Infos</h4> </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="DerniereEquipe" label="Dernière équipe" value={DerniereEquipe} onChange={setDerniereEquipe} />
      </Grid>
      <Grid item xs={12} md={6}>
      <TextField id="AnneeDerniereEquipe" label="Année" value={AnneeDerniereEquipe} onChange={setAnneeDerniereEquipe} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="CourrielImpots" label="Courriel pour reçu d'impôts" value={CourrielImpots} onChange={setCourrielImpots} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="Commentaires" label="Commentaires" value={Commentaires} onChange={setCommentaires} />
     </Grid>
      <Grid item xs={12} md={6}>
      <input type="button" onClick={handleOpen} className={classes.btnSuccess} value="Soumettre"/>


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
              Merci beaucoup pour votre confiance. Après avoir confirmé votre inscription en cliquant sur le bouton ci-dessous, il vous restera à nous faire parvenir votre paiement soit par Interac en ligne au ahmvtornades@hotmail.com, ou en personne à l'arena Howie-Morenz. Finalement, lors de votre passage, vous devrez signer votre consentement à l'activité de votre enfant.
            </p>
            </div>
:
<div>
            <h2 id="simple-modal-title">Un petit instant...</h2>
            <p id="simple-modal-description">
              Nous avons décelé au moins une erreur dans votre formulaire. Veuillez en prendre connaissance et corriger avant de soumettre.
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

            <input type="button"  className={classes.btnSuccess} disabled={erreurs.length} value="Confirmer" onClick={()=>{onSubmitForm();handleClose();}}/>
            <input type="button"  className={classes.btnSuccess} value={erreurs.length==0?"Annuler":"Corriger"} onClick={()=>{handleClose();}}/>
            <input type="reset"  className={classes.btnSuccess} value="Recommencer" onClick={()=>{resetForm();handleClose();}}/>
          </div>
      </Modal>
      </Grid> </Grid> 

      
       </Grid>
    </form>
    </Container>
</Paper>
 );

}



export default Inscription;
