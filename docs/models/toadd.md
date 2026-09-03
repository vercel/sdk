# ToAdd

## Example Usage

```typescript
import { ToAdd } from "@vercel/sdk/models/connectconnectorupdatedata.js";

let value: ToAdd = {
  value: "<value>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `value`                                                       | *string*                                                      | :heavy_check_mark:                                            | API key value.                                                |
| `scope`                                                       | *string*                                                      | :heavy_minus_sign:                                            | Optional scope associated with the API key value.             |
| `expiresAt`                                                   | *number*                                                      | :heavy_minus_sign:                                            | The timestamp when the API key value expires in milliseconds. |