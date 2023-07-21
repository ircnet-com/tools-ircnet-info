export interface IlineLookupResponse {
  ipAddress: string;
  hostname: string;

  response: ({
    serverName: string;
    serverInfo: string;
  })[];
}
