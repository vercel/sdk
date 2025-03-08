# CreateDeploymentCrons

## Example Usage

```typescript
import { CreateDeploymentCrons } from "@vercel/sdk/models/createdeploymentop.js";

let value: CreateDeploymentCrons = {
  schedule: "<value>",
  path: "/private/var",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `schedule`         | *string*           | :heavy_check_mark: | N/A                |
| `path`             | *string*           | :heavy_check_mark: | N/A                |