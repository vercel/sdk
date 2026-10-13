# GetProjectPasswordProtection

Password protection settings returned without the secret password hash.

## Example Usage

```typescript
import { GetProjectPasswordProtection } from "@vercel/sdk/models/getprojectresponsebody.js";

let value: GetProjectPasswordProtection = {
  deploymentType: "all",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `deploymentType`                                                                         | [models.GetProjectProjectsDeploymentType](../models/getprojectprojectsdeploymenttype.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |