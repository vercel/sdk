# UpdateMicrofrontendsStaticIps

## Example Usage

```typescript
import { UpdateMicrofrontendsStaticIps } from "@vercel/sdk/models/updatemicrofrontendsop.js";

let value: UpdateMicrofrontendsStaticIps = {
  builds: true,
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