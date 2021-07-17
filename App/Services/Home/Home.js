import { forEach as _forEach } from 'lodash'

import { API_URLS, NetworkInstance } from '../Config'

const PAYLOAD_TYPES = Object.freeze({
  MAIN_SLIDER: 'mainSlider',
  CELEBRITY: 'celebrity',
  PRODUCT: 'product',
  SECONDARY_SLIDER: 'secondarySlider',
  SLIDER: 'slider'
})

function mapHomeDataResponse(response = {}) {
  const {
    data: { payload }
  } = response

  const mappedResponse = {}

  _forEach(payload, (item) => {
    const { type, name, banners } = item

    switch (type) {
      case PAYLOAD_TYPES.SLIDER:
        if (name === 'Main Banners') {
          mappedResponse[PAYLOAD_TYPES.MAIN_SLIDER] = banners
        } else {
          mappedResponse[PAYLOAD_TYPES.SECONDARY_SLIDER] = banners
        }
        break

      case PAYLOAD_TYPES.CELEBRITY:
        mappedResponse[PAYLOAD_TYPES.CELEBRITY] = banners
        break

      case PAYLOAD_TYPES.PRODUCT:
        mappedResponse[PAYLOAD_TYPES.PRODUCT] = banners
        break
    }
  })

  return mappedResponse
}

function getHomeData(params, utils) {
  return NetworkInstance.request(
    {
      url: API_URLS.home,
      method: 'GET',
      params
    },
    { responseMapper: mapHomeDataResponse, ...utils }
  )
}

export { getHomeData, mapHomeDataResponse }
