# GetMicrofrontendsInGroupPasswordProtection

Password protection settings returned without the secret password hash.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupPasswordProtection } from "@vercel/sdk/models/getmicrofrontendsingroupresponsebody.js";

let value: GetMicrofrontendsInGroupPasswordProtection = {
  deploymentType: "all_except_custom_domains",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `deploymentType`                                                                                                                 | [models.GetMicrofrontendsInGroupMicrofrontendsDeploymentType](../models/getmicrofrontendsingroupmicrofrontendsdeploymenttype.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |