# ResponseBodyRemotePatterns

## Example Usage

```typescript
import { ResponseBodyRemotePatterns } from "@vercel/sdk/models/getdeploymentop.js";

let value: ResponseBodyRemotePatterns = {
  hostname: "puny-hyphenation.name",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `protocol`                                                                                                             | [models.ResponseBodyProtocol](../models/responsebodyprotocol.md)                                                       | :heavy_minus_sign:                                                                                                     | Must be `http` or `https`.                                                                                             |
| `hostname`                                                                                                             | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Can be literal or wildcard. Single `*` matches a single subdomain. Double `**` matches any number of subdomains.       |
| `port`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Can be literal port such as `8080` or empty string meaning no port.                                                    |
| `pathname`                                                                                                             | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Can be literal or wildcard. Single `*` matches a single path segment. Double `**` matches any number of path segments. |
| `search`                                                                                                               | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Can be literal query string such as `?v=1` or empty string meaning no query string.                                    |