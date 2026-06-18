# TypeSnowflake

## Example Usage

```typescript
import { TypeSnowflake } from "@vercel/sdk/models/createconnectorop.js";

let value: TypeSnowflake = {
  clientName: "<value>",
  accountIdentifier: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `clientName`          | *string*              | :heavy_check_mark:    | N/A                   |
| `accountIdentifier`   | *string*              | :heavy_check_mark:    | N/A                   |
| `defaultSessionRole`  | *string*              | :heavy_minus_sign:    | N/A                   |
| `extras`              | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |