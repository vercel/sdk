# Three3

## Example Usage

```typescript
import { Three3 } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: Three3 = {
  date: 6251.14,
  deploymentId: "<id>",
  type: "alias-assigned",
  alias: [],
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `date`                                                                                         | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `deploymentId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `type`                                                                                         | [models.GetDeploymentEvents3DeploymentsType](../models/getdeploymentevents3deploymentstype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `alias`                                                                                        | *string*[]                                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `aliasError`                                                                                   | [models.GetDeploymentEvents3AliasError](../models/getdeploymentevents3aliaserror.md)           | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `aliasWarning`                                                                                 | [models.GetDeploymentEvents3AliasWarning](../models/getdeploymentevents3aliaswarning.md)       | :heavy_check_mark:                                                                             | N/A                                                                                            |