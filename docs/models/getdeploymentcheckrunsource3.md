# GetDeploymentCheckRunSource3

## Example Usage

```typescript
import { GetDeploymentCheckRunSource3 } from "@vercel/sdk/models/getdeploymentcheckrunop.js";

let value: GetDeploymentCheckRunSource3 = {
  kind: "git-provider",
  provider: "gitlab",
  externalCheckName: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `kind`                                                                                         | *"git-provider"*                                                                               | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `provider`                                                                                     | [models.GetDeploymentCheckRunSourceProvider](../models/getdeploymentcheckrunsourceprovider.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `externalCheckName`                                                                            | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |