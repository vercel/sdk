# GetProjectsStaticIps

## Example Usage

```typescript
import { GetProjectsStaticIps } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsStaticIps = {
  builds: true,
  enabled: true,
  regions: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `builds`           | *boolean*          | :heavy_check_mark: | N/A                |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `regions`          | *string*[]         | :heavy_check_mark: | N/A                |