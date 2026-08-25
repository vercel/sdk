# Values

## Example Usage

```typescript
import { Values } from "@vercel/sdk/models/connectconnectorcreatedata.js";

let value: Values = {
  value: "<value>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `value`                                                       | *string*                                                      | :heavy_check_mark:                                            | API key value.                                                |
| `scope`                                                       | *string*                                                      | :heavy_minus_sign:                                            | Optional scope associated with the API key value.             |
| `expiresAt`                                                   | *number*                                                      | :heavy_minus_sign:                                            | The timestamp when the API key value expires in milliseconds. |