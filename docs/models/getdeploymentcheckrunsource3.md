# GetDeploymentCheckRunSource3

## Example Usage

```typescript
import { GetDeploymentCheckRunSource3 } from "@vercel/sdk/models/getdeploymentcheckrunop.js";

let value: GetDeploymentCheckRunSource3 = {
  externalCheckName: "<value>",
  kind: "git-provider",
  provider: "github",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `externalCheckName`                                                                                                    | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `kind`                                                                                                                 | [models.GetDeploymentCheckRunSourceChecksV2ResponseKind](../models/getdeploymentcheckrunsourcechecksv2responsekind.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `provider`                                                                                                             | [models.GetDeploymentCheckRunSourceProvider](../models/getdeploymentcheckrunsourceprovider.md)                         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |