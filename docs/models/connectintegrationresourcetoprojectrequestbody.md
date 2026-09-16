# ConnectIntegrationResourceToProjectRequestBody

## Example Usage

```typescript
import { ConnectIntegrationResourceToProjectRequestBody } from "@vercel/sdk/models/connectintegrationresourcetoprojectop.js";

let value: ConnectIntegrationResourceToProjectRequestBody = {
  projectId: "<id>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `projectId`                         | *string*                            | :heavy_check_mark:                  | N/A                                 |
| `envVarEnvironments`                | *models.EnvVarEnvironmentsTarget*[] | :heavy_minus_sign:                  | N/A                                 |
| `makeEnvVarsSensitive`              | *boolean*                           | :heavy_minus_sign:                  | N/A                                 |