# GlobalConfigItem

The Global Config.

## Example Usage

```typescript
import { GlobalConfigItem } from "@vercel/sdk/models/globalconfigitem.js";

let value: GlobalConfigItem = {
  key: "<key>",
  value: {},
  edgeConfigId: "<id>",
  createdAt: 3367.93,
  updatedAt: 4196.37,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `key`                          | *string*                       | :heavy_check_mark:             | N/A                            |
| `value`                        | *models.GlobalConfigItemValue* | :heavy_check_mark:             | N/A                            |
| `description`                  | *string*                       | :heavy_minus_sign:             | N/A                            |
| `edgeConfigId`                 | *string*                       | :heavy_check_mark:             | N/A                            |
| `createdAt`                    | *number*                       | :heavy_check_mark:             | N/A                            |
| `updatedAt`                    | *number*                       | :heavy_check_mark:             | N/A                            |