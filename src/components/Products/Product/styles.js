import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16 by 9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    
    
    
    // media: {
    //     height: 260,
    // },
    // cardContent: {
    //     display: 'flex',
    //     justifyContent: 'space-between',
    // },
    // cartActions: {
    //     justifyContent: 'space-between',
    // },
    // buttons: {
    //     display: 'flex',
    //     alignItems: 'center',
    // },
}));