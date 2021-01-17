import {Appearance} from 'react-native';
let fonts = {
    Primary: 'Montserrat',
}

let colorPalettes = {
    light: {
        background: '#ebebeb',
        backgroundAccent: '#e0e0e0',
        text: '#333333',
        primaryButton: '#333333',
        secondaryButton: '#cfcfcf',
        activityIndicatorColor: '#dddddd',
        error: '#b55653',
        success: '#40a859'
    },
    dark: {
        background: '#333333',
        backgroundAccent: '#444444',
        text: '#ebebeb',
        primaryButton: '#ebebeb',
        secondaryButton: '#666666',
        activityIndicatorColor: '#777777',
        error: '#ff6763',
        success: '#74fc94'
    },
}

var colors = null

if(Appearance.getColorScheme() == "light"){
    colors = colorPalettes.light
}else{
    colors = colorPalettes.dark
}

export {colors, fonts}
