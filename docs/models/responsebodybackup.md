# ResponseBodyBackup

## Example Usage

```typescript
import { ResponseBodyBackup } from "@vercel/sdk/models/getedgeconfigbackupop.js";

let value: ResponseBodyBackup = {
  digest: "<value>",
  items: {
    "key": {
      updatedAt: 1426.45,
      value: 4073.57,
      createdAt: 6147.16,
    },
  },
  slug: "<value>",
  updatedAt: 7293.5,
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `digest`                                                                                                                                              | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |
| `items`                                                                                                                                               | Record<string, [models.ResponseBodyItems](../models/responsebodyitems.md)>                                                                            | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |
| `slug`                                                                                                                                                | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | Name for the Edge Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores). |
| `updatedAt`                                                                                                                                           | *number*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |