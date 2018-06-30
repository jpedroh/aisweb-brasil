export default class AisConfig {
  public apiKey: string;
  public apiPass: string;

  constructor({ apiKey, apiPass }: AisConfig) {
    this.apiKey = apiKey;
    this.apiPass = apiPass;
  }

}