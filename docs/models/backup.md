# Backup

## Example Usage

```typescript
import { Backup } from "@vercel/sdk/models/getedgeconfigbackupop.js";

let value: Backup = {
  slug: "<value>",
  updatedAt: 3846.84,
  items: {
    "key": {
      createdAt: 4844.83,
      updatedAt: 8975.88,
      value: false,
    },
  },
  digest: "<value>",
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `slug`                                                                                                                                                | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | Name for the Edge Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores). |
| `updatedAt`                                                                                                                                           | *number*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |
| `items`                                                                                                                                               | Record<string, [models.ResponseBodyItems](../models/responsebodyitems.md)>                                                                            | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |
| `digest`                                                                                                                                              | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |