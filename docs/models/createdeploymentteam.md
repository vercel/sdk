# CreateDeploymentTeam

The team that owns the deployment if any

## Example Usage

```typescript
import { CreateDeploymentTeam } from "@vercel/sdk/models/createdeploymentop.js";

let value: CreateDeploymentTeam = {
  id: "<id>",
  name: "<value>",
  slug: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `slug`             | *string*           | :heavy_check_mark: | N/A                |
| `avatar`           | *string*           | :heavy_minus_sign: | N/A                |