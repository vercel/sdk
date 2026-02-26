# CreateDeploymentDeploymentsSource

The external platform that created the deployment (e.g. its display name).

## Example Usage

```typescript
import { CreateDeploymentDeploymentsSource } from "@vercel/sdk/models/createdeploymentop.js";

let value: CreateDeploymentDeploymentsSource = {
  name: "<value>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `name`                        | *string*                      | :heavy_check_mark:            | Display name of the platform. |