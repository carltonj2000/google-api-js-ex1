export type WebT = {
  client_id: string;
  project_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_secret: string;
  javascript_origins: Array<string>;
};

export type AuthT = {
  web: WebT;
  api_key: string;
};
