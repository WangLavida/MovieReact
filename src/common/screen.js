/**
 * Created by W.J on 2018/4/5.
 */

import { Dimensions, Platform, PixelRatio } from 'react-native'

export default {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    onePixel: 1 / PixelRatio.get(),
    statusBarHeight: (Platform.OS === 'ios' ? 20 : 0)
}