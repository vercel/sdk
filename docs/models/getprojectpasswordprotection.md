# GetProjectPasswordProtection

## Example Usage

```typescript
import { GetProjectPasswordProtection } from "@vercel/sdk/models/getprojectresponsebody.js";

let value: GetProjectPasswordProtection = {
  deploymentType: "all_except_custom_domains",
};
```

## Fields

| Field | Type | Required | Description |
| ----- | ---- | -------- | ----------- |
| `deploymentType` | [models.GetProjectDeploymentType](../models/getprojectdeploymenttype.md) | :heavy_check_mark: | Deployment scope protected by the project password. |
