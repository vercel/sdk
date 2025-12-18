# UpdateVersionRequestBody

## Example Usage

```typescript
import { UpdateVersionRequestBody } from "@vercel/sdk/models/updateversionop.js";

let value: UpdateVersionRequestBody = {
  id: "<id>",
  action: "promote",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `action`                                                       | [models.UpdateVersionAction](../models/updateversionaction.md) | :heavy_check_mark:                                             | N/A                                                            |
| `name`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |