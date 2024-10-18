import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// Les jours de la semaine pour le tableau
const joursSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

const useFetch = () => {
  const [data, setData] = useState([]);
  const [equipes, setEquipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const responsePratiques = await fetch("/api/pratiques?_limit=100&_sort=Jour:DESC");
      const pratiques = await responsePratiques.json();
      
      const responseEquipes = await fetch("/api/equipes");
      const equipes = await responseEquipes.json();

      setData(pratiques);
      setEquipes(equipes);
      setLoading(false); // Le chargement est terminé
    }
    fetchData();
  }, []);

  return { loading, data, equipes };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
    overflowX: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '1rem',
  },
  table: {
    minWidth: 650,
  },
}));

function Pratiques() {
  const classes = useStyles();
  const { loading, data, equipes } = useFetch();
  const [selEquipe, setSelEquipe] = useState(0);
  const selectRef = useRef(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant="h2" gutterBottom>
          Pratiques
        </Typography>
        <span>Choisir votre équipe:</span>
        <select ref={selectRef} onChange={() => setSelEquipe(selectRef.current.value)}>
          <option key={0} value={0}>Toutes</option>
          {equipes.map(equipe => (
            <option key={equipe.id} value={equipe.id}>
              {equipe.Nom}
            </option>
          ))}
        </select>

        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell align="right">Jour</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Équipes</TableCell>
              <TableCell align="right">Début</TableCell>
              <TableCell align="right">Fin</TableCell>
              <TableCell align="right">Aréna</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((pratique) => (
              <TableRow key={pratique.id}>
                <TableCell align="right">
                  {joursSemaine[new Date(pratique.Jour).getDay()]}
                </TableCell>
                <TableCell align="right">
                  {new Date(pratique.Jour).toLocaleDateString("fr-CA")}
                </TableCell>
                <TableCell align="right">
                  {Object.values(pratique.equipes).map((equipe) => (
                    <span key={equipe.id}>{equipe.Nom}<br/></span>
                  ))}
                </TableCell>
                <TableCell align="right">
                  {pratiques.Debut.split(":")[0] +
                      ":" +
                      pratiques.Debut.split(":")[1]}
                     </TableCell>
                     <TableCell align="right">
                      {pratiques.Fin.split(":")[0] +
                      ":" +
                      pratiques.Fin.split(":")[1]}
                      </TableCell>
                <TableCell align="right">
                  {pratique.arena ? pratique.arena.Nom : "---"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

export default Pratiques;
