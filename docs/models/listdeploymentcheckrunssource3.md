# ListDeploymentCheckRunsSource3

## Example Usage

```typescript
import { ListDeploymentCheckRunsSource3 } from "@vercel/sdk/models/listdeploymentcheckrunsop.js";

let value: ListDeploymentCheckRunsSource3 = {
  kind: "git-provider",
  provider: "gitlab",
  externalCheckName: "<value>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                     | [models.ListDeploymentCheckRunsSourceChecksV2ResponseKind](../models/listdeploymentcheckrunssourcechecksv2responsekind.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `provider`                                                                                                                 | [models.ListDeploymentCheckRunsSourceProvider](../models/listdeploymentcheckrunssourceprovider.md)                         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `externalCheckName`                                                                                                        | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |