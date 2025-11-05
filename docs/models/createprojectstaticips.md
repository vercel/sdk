# CreateProjectStaticIps

## Example Usage

```typescript
import { CreateProjectStaticIps } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectStaticIps = {
  builds: false,
  enabled: false,
  regions: [
    "<value 1>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `builds`           | *boolean*          | :heavy_check_mark: | N/A                |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `regions`          | *string*[]         | :heavy_check_mark: | N/A                |