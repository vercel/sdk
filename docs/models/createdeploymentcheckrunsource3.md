# CreateDeploymentCheckRunSource3

## Example Usage

```typescript
import { CreateDeploymentCheckRunSource3 } from "@vercel/sdk/models/createdeploymentcheckrunop.js";

let value: CreateDeploymentCheckRunSource3 = {
  externalCheckName: "<value>",
  kind: "git-provider",
  provider: "github",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `externalCheckName`                                                                                                          | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `kind`                                                                                                                       | [models.CreateDeploymentCheckRunSourceChecksV2ResponseKind](../models/createdeploymentcheckrunsourcechecksv2responsekind.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `provider`                                                                                                                   | [models.CreateDeploymentCheckRunSourceProvider](../models/createdeploymentcheckrunsourceprovider.md)                         | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |