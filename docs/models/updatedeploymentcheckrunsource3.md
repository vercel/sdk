# UpdateDeploymentCheckRunSource3

## Example Usage

```typescript
import { UpdateDeploymentCheckRunSource3 } from "@vercel/sdk/models/updatedeploymentcheckrunop.js";

let value: UpdateDeploymentCheckRunSource3 = {
  externalCheckName: "<value>",
  kind: "git-provider",
  provider: "bitbucket",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `externalCheckName`                                                                                                          | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `kind`                                                                                                                       | [models.UpdateDeploymentCheckRunSourceChecksV2ResponseKind](../models/updatedeploymentcheckrunsourcechecksv2responsekind.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `provider`                                                                                                                   | [models.UpdateDeploymentCheckRunSourceProvider](../models/updatedeploymentcheckrunsourceprovider.md)                         | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |