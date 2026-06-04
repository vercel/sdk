# Queries

## Example Usage

```typescript
import { Queries } from "@vercel/sdk/models/datacacheread.js";

let value: Queries = {
  command: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `command`                                      | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `rowCount`                                     | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `tables`                                       | *string*[]                                     | :heavy_minus_sign:                             | N/A                                            |
| `primaryKey`                                   | [models.PrimaryKey](../models/primarykey.md)[] | :heavy_minus_sign:                             | N/A                                            |