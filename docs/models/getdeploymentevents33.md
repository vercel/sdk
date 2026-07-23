# GetDeploymentEvents33

## Example Usage

```typescript
import { GetDeploymentEvents33 } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: GetDeploymentEvents33 = {
  type: "alias-assigned",
  deploymentId: "<id>",
  date: 2381.48,
  alias: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  aliasError: {
    code: "<value>",
    message: "<value>",
  },
  aliasWarning: {
    code: "<value>",
    message: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                 | [models.GetDeploymentEvents3DeploymentsResponse200ApplicationStreamPlusJsonType](../models/getdeploymentevents3deploymentsresponse200applicationstreamplusjsontype.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `deploymentId`                                                                                                                                                         | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `date`                                                                                                                                                                 | *number*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `alias`                                                                                                                                                                | *string*[]                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `aliasError`                                                                                                                                                           | [models.ThreeAliasError](../models/threealiaserror.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `aliasWarning`                                                                                                                                                         | [models.ThreeAliasWarning](../models/threealiaswarning.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |