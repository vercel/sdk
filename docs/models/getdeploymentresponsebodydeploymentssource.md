# GetDeploymentResponseBodyDeploymentsSource

The external platform that created the deployment (e.g. its display name).

## Example Usage

```typescript
import { GetDeploymentResponseBodyDeploymentsSource } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentResponseBodyDeploymentsSource = {
  name: "<value>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `name`                        | *string*                      | :heavy_check_mark:            | Display name of the platform. |