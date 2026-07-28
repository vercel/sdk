# CreateDeploymentResponseBodyDeploymentsSource

The external platform that created the deployment (e.g. its display name).

## Example Usage

```typescript
import { CreateDeploymentResponseBodyDeploymentsSource } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: CreateDeploymentResponseBodyDeploymentsSource = {
  name: "<value>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `name`                        | *string*                      | :heavy_check_mark:            | Display name of the platform. |