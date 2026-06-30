# GetProjectPassport

## Example Usage

```typescript
import { GetProjectPassport } from "@vercel/sdk/models/getprojectlastrollbacktarget.js";

let value: GetProjectPassport = {
  deploymentType: "all_except_custom_domains",
  connectorId: "<id>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `deploymentType`                                                         | [models.GetProjectDeploymentType](../models/getprojectdeploymenttype.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `connectorId`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |