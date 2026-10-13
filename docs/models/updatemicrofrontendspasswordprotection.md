# UpdateMicrofrontendsPasswordProtection

Password protection settings returned without the secret password hash.

## Example Usage

```typescript
import { UpdateMicrofrontendsPasswordProtection } from "@vercel/sdk/models/updatemicrofrontendsresponsebody.js";

let value: UpdateMicrofrontendsPasswordProtection = {
  deploymentType: "prod_deployment_urls_and_all_previews",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `deploymentType`                                                                                             | [models.UpdateMicrofrontendsProjectsDeploymentType](../models/updatemicrofrontendsprojectsdeploymenttype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |