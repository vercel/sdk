# EdgeConfigItem

The EdgeConfig.

## Example Usage

```typescript
import { EdgeConfigItem } from "@vercel/sdk/models/edgeconfigitem.js";

let value: EdgeConfigItem = {
  key: "<key>",
  value: [],
  edgeConfigId: "<id>",
  createdAt: 1865.37,
  updatedAt: 8054.37,
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `key`                        | *string*                     | :heavy_check_mark:           | N/A                          |
| `value`                      | *models.EdgeConfigItemValue* | :heavy_check_mark:           | N/A                          |
| `description`                | *string*                     | :heavy_minus_sign:           | N/A                          |
| `edgeConfigId`               | *string*                     | :heavy_check_mark:           | N/A                          |
| `createdAt`                  | *number*                     | :heavy_check_mark:           | N/A                          |
| `updatedAt`                  | *number*                     | :heavy_check_mark:           | N/A                          |