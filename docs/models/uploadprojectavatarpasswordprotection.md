# UploadProjectAvatarPasswordProtection

Password protection settings returned without the secret password hash.

## Example Usage

```typescript
import { UploadProjectAvatarPasswordProtection } from "@vercel/sdk/models/uploadprojectavatarresponsebody.js";

let value: UploadProjectAvatarPasswordProtection = {
  deploymentType: "preview",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `deploymentType`                                                                                           | [models.UploadProjectAvatarProjectsDeploymentType](../models/uploadprojectavatarprojectsdeploymenttype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |