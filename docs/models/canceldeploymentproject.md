# CancelDeploymentProject

The public project information associated with the deployment.

## Example Usage

```typescript
import { CancelDeploymentProject } from "@vercel/sdk/models/readystate.js";

let value: CancelDeploymentProject = {
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `framework`        | *string*           | :heavy_minus_sign: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |