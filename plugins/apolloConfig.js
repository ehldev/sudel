import { appConfig } from '../env'

export default function({context, app}){
  return {
    httpEndpoint: appConfig.graphUrl,
    inMemoryCacheOptions: {
      addTypename: false
    }
  }
}
