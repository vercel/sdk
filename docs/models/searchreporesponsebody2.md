# SearchRepoResponseBody2

## Example Usage

```typescript
import { SearchRepoResponseBody2 } from "@vercel/sdk/models/searchrepoop.js";

let value: SearchRepoResponseBody2 = {
  gitAccount: {
    provider: "gitlab",
    namespaceId: 245.69,
  },
  repos: [
    {
      id: "<id>",
      provider: "github",
      url: "https://delectable-taxicab.com",
      name: "<value>",
      slug: "<value>",
      namespace: "<value>",
      owner: {
        id: "<id>",
        name: "<value>",
      },
      ownerType: "team",
      private: true,
      defaultBranch: "<value>",
      updatedAt: 3664.49,
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `gitAccount`                                 | [models.GitAccount](../models/gitaccount.md) | :heavy_check_mark:                           | N/A                                          |
| `repos`                                      | [models.Repos](../models/repos.md)[]         | :heavy_check_mark:                           | N/A                                          |