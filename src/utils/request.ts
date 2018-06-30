import Axios from 'axios';
import Processor from '../processors/contract';
import AisConfig from './config';
import { ApiAreas } from './enums';

export default class RequestHandler {
  private apiKey: string;
  private apiPass: string;
  private requestUrl: string;

  constructor(config: AisConfig, module: ApiAreas) {
    this.apiKey = config.apiKey;
    this.apiPass = config.apiPass;
    this.requestUrl = `https://www.aisweb.aer.mil.br/api/?apiKey=${this.apiKey}&apiPass=${this.apiPass}&area=${module}`;
  }

  performRequest(airportIcao: string, processor: Processor): Promise<Array<any>> {
    return Axios.get(`${this.requestUrl}&IcaoCode=${airportIcao}`).then(processor.processRequest)
  }
  
}