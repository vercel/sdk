# Repos

## Example Usage

```typescript
import { Repos } from "@vercel/sdk/models/searchrepoop.js";

let value: Repos = {
  id: "<id>",
  provider: "cursor-origin",
  url: "https://cheap-someplace.biz/",
  name: "<value>",
  slug: "<value>",
  namespace: "<value>",
  ownerType: "user",
  owner: {
    id: "<id>",
    name: "<value>",
  },
  private: true,
  defaultBranch: "<value>",
  updatedAt: 623.18,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `provider`                                                                           | [models.SearchRepoResponseBodyProvider](../models/searchreporesponsebodyprovider.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `slug`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `namespace`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `ownerType`                                                                          | [models.ResponseBodyOwnerType](../models/responsebodyownertype.md)                   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `owner`                                                                              | [models.ResponseBodyOwner](../models/responsebodyowner.md)                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `private`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `defaultBranch`                                                                      | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `updatedAt`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |