import {StyleSheet, Dimensions, Appearance} from 'react-native';
import {BaseTheme} from 'rework-native'
import {colors, fonts} from './Variables'
import buttonStyles from './Styles/Buttons'
import formStyles from './Styles/Forms'
import layoutStyles from './Styles/Layout'
import utilityStyles from './Styles/Utility'


const styles = StyleSheet.flatten([
    BaseTheme.styles,
    buttonStyles,
    formStyles,
    layoutStyles,
    utilityStyles
])

export {fonts, colors, styles}
