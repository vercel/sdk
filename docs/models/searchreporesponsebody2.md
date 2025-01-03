# SearchRepoResponseBody2

## Example Usage

```typescript
import { SearchRepoResponseBody2 } from "@vercel/sdk/models/searchrepoop.js";

let value: SearchRepoResponseBody2 = {
  gitAccount: {
    provider: "gitlab",
    namespaceId: "<id>",
  },
  repos: [
    {
      id: 6651.83,
      provider: "github",
      url: "https://glaring-napkin.info/",
      name: "<value>",
      slug: "<value>",
      namespace: "<value>",
      owner: {
        id: 8196.90,
        name: "<value>",
      },
      ownerType: "user",
      private: false,
      defaultBranch: "<value>",
      updatedAt: 1342.67,
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `gitAccount`                                 | [models.GitAccount](../models/gitaccount.md) | :heavy_check_mark:                           | N/A                                          |
| `repos`                                      | [models.Repos](../models/repos.md)[]         | :heavy_check_mark:                           | N/A                                          |