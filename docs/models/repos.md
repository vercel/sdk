# Repos

## Example Usage

```typescript
import { Repos } from "@vercel/sdk/models/searchrepoop.js";

let value: Repos = {
  defaultBranch: "<value>",
  id: "<id>",
  name: "<value>",
  namespace: "<value>",
  owner: {
    id: "<id>",
    name: "<value>",
  },
  ownerType: "team",
  private: true,
  provider: "cursor-origin",
  slug: "<value>",
  updatedAt: 8294.84,
  url: "https://unlawful-character.com/",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `defaultBranch`                                                                      | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `namespace`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `owner`                                                                              | [models.ResponseBodyOwner](../models/responsebodyowner.md)                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `ownerType`                                                                          | [models.ResponseBodyOwnerType](../models/responsebodyownertype.md)                   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `private`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `provider`                                                                           | [models.SearchRepoResponseBodyProvider](../models/searchreporesponsebodyprovider.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `slug`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `updatedAt`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |