# Values

## Example Usage

```typescript
import { Values } from "@vercel/sdk/models/createconnectorop.js";

let value: Values = {
  value: "<value>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `value`                                                       | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `scope`                                                       | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `expiresAt`                                                   | *number*                                                      | :heavy_minus_sign:                                            | The timestamp when the API key value expires in milliseconds. |