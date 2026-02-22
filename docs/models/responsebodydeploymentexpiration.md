# ResponseBodyDeploymentExpiration

Retention policies for deployments. These are enforced at the project level, but we also maintain an instance of this at the team level as a default policy that gets applied to new projects.

## Example Usage

```typescript
import { ResponseBodyDeploymentExpiration } from "@vercel/sdk/models/getprojectsrouteprojects1.js";

let value: ResponseBodyDeploymentExpiration = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `expirationDays`                                                                                                          | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Number of days to keep non-production deployments (mostly preview deployments) before soft deletion.                      |
| `expirationDaysProduction`                                                                                                | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Number of days to keep production deployments before soft deletion.                                                       |
| `expirationDaysCanceled`                                                                                                  | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Number of days to keep canceled deployments before soft deletion.                                                         |
| `expirationDaysErrored`                                                                                                   | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Number of days to keep errored deployments before soft deletion.                                                          |
| `deploymentsToKeep`                                                                                                       | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Minimum number of production deployments to keep for this project, even if they are over the production expiration limit. |