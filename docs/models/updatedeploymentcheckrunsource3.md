# UpdateDeploymentCheckRunSource3

## Example Usage

```typescript
import { UpdateDeploymentCheckRunSource3 } from "@vercel/sdk/models/updatedeploymentcheckrunop.js";

let value: UpdateDeploymentCheckRunSource3 = {
  kind: "git-provider",
  provider: "github",
  externalCheckName: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `kind`                                                                                               | *"git-provider"*                                                                                     | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `provider`                                                                                           | [models.UpdateDeploymentCheckRunSourceProvider](../models/updatedeploymentcheckrunsourceprovider.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `externalCheckName`                                                                                  | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |