# CreateDeploymentCheckRunSource1

## Example Usage

```typescript
import { CreateDeploymentCheckRunSource1 } from "@vercel/sdk/models/createdeploymentcheckrunop.js";

let value: CreateDeploymentCheckRunSource1 = {
  integrationConfigurationId: "<id>",
  integrationId: "<id>",
  kind: "integration",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `externalResourceId`                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `integrationConfigurationId`                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `integrationId`                                                                              | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `kind`                                                                                       | [models.CreateDeploymentCheckRunSourceKind](../models/createdeploymentcheckrunsourcekind.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `resourceId`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |