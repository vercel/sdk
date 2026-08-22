# ConnectIntegrationResourceToProjectRequestBody

## Example Usage

```typescript
import { ConnectIntegrationResourceToProjectRequestBody } from "@vercel/sdk/models/connectintegrationresourcetoprojectop.js";

let value: ConnectIntegrationResourceToProjectRequestBody = {
  projectId: "<id>",
  envVarEnvironments: [
    "production",
    "env_abc123",
  ],
};
```

## Fields

| Field                      | Type       | Required           | Description                                                                      |
| -------------------------- | ---------- | ------------------ | -------------------------------------------------------------------------------- |
| `projectId`                | *string*   | :heavy_check_mark: | N/A                                                                              |
| `envVarEnvironments`       | *string*[] | :heavy_minus_sign: | Built-in environment targets or project custom environment slugs or IDs.         |
| `makeEnvVarsSensitive`     | *boolean*  | :heavy_minus_sign: | N/A                                                                              |
