# GetDeploymentResponseBodyRemotePatterns

## Example Usage

```typescript
import { GetDeploymentResponseBodyRemotePatterns } from "@vercel/sdk/models/getdeploymentservicesdeploymentsmiddlewarematcher.js";

let value: GetDeploymentResponseBodyRemotePatterns = {
  hostname: "slushy-barge.org",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `hostname`                                                                                                             | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Can be literal or wildcard. Single `*` matches a single subdomain. Double `**` matches any number of subdomains.       |
| `pathname`                                                                                                             | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Can be literal or wildcard. Single `*` matches a single path segment. Double `**` matches any number of path segments. |
| `port`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Can be literal port such as `8080` or empty string meaning no port.                                                    |
| `protocol`                                                                                                             | [models.GetDeploymentResponseBodyProtocol](../models/getdeploymentresponsebodyprotocol.md)                             | :heavy_minus_sign:                                                                                                     | Must be `http` or `https`.                                                                                             |
| `search`                                                                                                               | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Can be literal query string such as `?v=1` or empty string meaning no query string.                                    |