# ToUpdate

## Example Usage

```typescript
import { ToUpdate } from "@vercel/sdk/models/connectconnectorupdatedata.js";

let value: ToUpdate = {
  id: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `id`                                                          | *string*                                                      | :heavy_check_mark:                                            | Stored API key value ID.                                      |
| `value`                                                       | *string*                                                      | :heavy_minus_sign:                                            | Replacement API key value. Use null to keep the stored value. |
| `scope`                                                       | *string*                                                      | :heavy_minus_sign:                                            | Replacement scope. Use null to remove the scope.              |
| `expiresAt`                                                   | *models.ExpiresAt*                                            | :heavy_minus_sign:                                            | The timestamp when the API key value expires in milliseconds. |