# ResponseBodyRepos

## Example Usage

```typescript
import { ResponseBodyRepos } from "@vercel/sdk/models/searchrepoop.js";

let value: ResponseBodyRepos = {
  defaultBranch: "<value>",
  id: 7206.61,
  name: "<value>",
  namespace: "<value>",
  owner: {
    id: 6230.27,
    name: "<value>",
  },
  ownerType: "user",
  private: false,
  provider: "bitbucket",
  slug: "<value>",
  updatedAt: 1915.89,
  url: "https://tepid-submitter.name/",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `defaultBranch`                                                                                                              | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `id`                                                                                                                         | *models.ResponseBodyId*                                                                                                      | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `namespace`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `owner`                                                                                                                      | [models.SearchRepoResponseBodyOwner](../models/searchreporesponsebodyowner.md)                                               | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `ownerType`                                                                                                                  | [models.SearchRepoResponseBodyOwnerType](../models/searchreporesponsebodyownertype.md)                                       | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `private`                                                                                                                    | *boolean*                                                                                                                    | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `provider`                                                                                                                   | [models.SearchRepoResponseBodyIntegrationsResponseProvider](../models/searchreporesponsebodyintegrationsresponseprovider.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `slug`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `updatedAt`                                                                                                                  | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `url`                                                                                                                        | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |