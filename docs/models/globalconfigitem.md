# GlobalConfigItem

The Global Config.

## Example Usage

```typescript
import { GlobalConfigItem } from "@vercel/sdk/models/globalconfigitem.js";

let value: GlobalConfigItem = {
  createdAt: 9101.09,
  edgeConfigId: "<id>",
  key: "<key>",
  updatedAt: 4700.45,
  value: 4196.37,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `createdAt`                    | *number*                       | :heavy_check_mark:             | N/A                            |
| `description`                  | *string*                       | :heavy_minus_sign:             | N/A                            |
| `edgeConfigId`                 | *string*                       | :heavy_check_mark:             | N/A                            |
| `key`                          | *string*                       | :heavy_check_mark:             | N/A                            |
| `updatedAt`                    | *number*                       | :heavy_check_mark:             | N/A                            |
| `value`                        | *models.GlobalConfigItemValue* | :heavy_check_mark:             | N/A                            |