# Keys

## Example Usage

```typescript
import { Keys } from "@vercel/sdk/models/createconnectorop.js";

let value: Keys = {
  kty: "<value>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `kty`                          | *string*                       | :heavy_check_mark:             | N/A                            |
| `kid`                          | *string*                       | :heavy_minus_sign:             | N/A                            |
| `use`                          | [models.Use](../models/use.md) | :heavy_minus_sign:             | N/A                            |
| `keyOps`                       | *string*[]                     | :heavy_minus_sign:             | N/A                            |
| `alg`                          | *string*                       | :heavy_minus_sign:             | N/A                            |
| `additionalProperties`         | Record<string, *any*>          | :heavy_minus_sign:             | N/A                            |