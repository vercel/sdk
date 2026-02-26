# CancelDeploymentDeploymentsSource

The external platform that created the deployment (e.g. its display name).

## Example Usage

```typescript
import { CancelDeploymentDeploymentsSource } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentDeploymentsSource = {
  name: "<value>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `name`                        | *string*                      | :heavy_check_mark:            | Display name of the platform. |