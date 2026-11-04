# GetProjectPassport

## Example Usage

```typescript
import { GetProjectPassport } from "@vercel/sdk/models/getprojectfrompreset.js";

let value: GetProjectPassport = {
  connectorId: "<id>",
  deploymentType: "all_except_custom_domains",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `connectorId`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `deploymentType`                                                         | [models.GetProjectDeploymentType](../models/getprojectdeploymenttype.md) | :heavy_check_mark:                                                       | N/A                                                                      |