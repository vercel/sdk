# PatchTeamDefaultExpirationSettings

## Example Usage

```typescript
import { PatchTeamDefaultExpirationSettings } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamDefaultExpirationSettings = {
  expiration: "1y",
  expirationProduction: "1y",
  expirationCanceled: "1y",
  expirationErrored: "1y",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `expiration`                                                     | [models.Expiration](../models/expiration.md)                     | :heavy_minus_sign:                                               | The time period to keep non-production deployments for           | 1y                                                               |
| `expirationProduction`                                           | [models.ExpirationProduction](../models/expirationproduction.md) | :heavy_minus_sign:                                               | The time period to keep production deployments for               | 1y                                                               |
| `expirationCanceled`                                             | [models.ExpirationCanceled](../models/expirationcanceled.md)     | :heavy_minus_sign:                                               | The time period to keep canceled deployments for                 | 1y                                                               |
| `expirationErrored`                                              | [models.ExpirationErrored](../models/expirationerrored.md)       | :heavy_minus_sign:                                               | The time period to keep errored deployments for                  | 1y                                                               |