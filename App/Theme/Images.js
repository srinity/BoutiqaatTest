import { Image } from 'react-native'

const Images = {
  logo: Image.resolveAssetSource(require('./../Assets/Images/download.png'))
}

export default Images

export const imageNames = Object.keys(Images)
