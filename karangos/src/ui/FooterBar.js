// import Toolbar from '@material-ui/core/Toolbar'
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import LocalCafeTwoToneIcon from '@material-ui/icons/LocalCafeTwoTone';

const useStyles = makeStyles((theme) => ({
    text: {
        //backgroundColor: 'yellow',
        width: '100%',
        color: theme.palette.text.secondary
    },
    toolbar: {
        backgroundColor: theme.palette.background.paper,
        minHeight: '42px',
        // Posicionando a barra no rodapé da página
        width: '100%',
        position: 'fixed',
        bottom: 0
    },
    link: {
        color: theme.palette.secondary.light,
        textDecoration: 'none',  // retira o sublinhado do link
        '&:hover': {
            textDecoration: 'underline'   // retorna o sublinhado
        }
    }
}));

export default function FooterBar() {
    const classes = useStyles();
    return (
        <Toolbar className={classes.toolbar}>
            <Typography variant="caption" align="center" className={classes.text}>
                Desenvolvido com <LocalCafeTwoToneIcon fontSize="small" /> por <a href="mailto:ga.karmo@gmail.com " className={classes.link}>Karmo</a>
            </Typography>
        </Toolbar>
    )
}