# ResponseBodyRepos

## Example Usage

```typescript
import { ResponseBodyRepos } from "@vercel/sdk/models/searchrepoop.js";

let value: ResponseBodyRepos = {
  id: 7206.61,
  provider: "vercel",
  url: "https://multicolored-mechanic.com",
  name: "<value>",
  slug: "<value>",
  namespace: "<value>",
  owner: {
    id: "<id>",
    name: "<value>",
  },
  ownerType: "team",
  private: false,
  defaultBranch: "<value>",
  updatedAt: 8643.16,
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *models.ResponseBodyId*                                                                                                      | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `provider`                                                                                                                   | [models.SearchRepoResponseBodyIntegrationsResponseProvider](../models/searchreporesponsebodyintegrationsresponseprovider.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `url`                                                                                                                        | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `slug`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `namespace`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `owner`                                                                                                                      | [models.SearchRepoResponseBodyOwner](../models/searchreporesponsebodyowner.md)                                               | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `ownerType`                                                                                                                  | [models.SearchRepoResponseBodyOwnerType](../models/searchreporesponsebodyownertype.md)                                       | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `private`                                                                                                                    | *boolean*                                                                                                                    | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `defaultBranch`                                                                                                              | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `updatedAt`                                                                                                                  | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |