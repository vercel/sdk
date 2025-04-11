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
      id: 245.69,
      provider: "bitbucket",
      url: "https://lost-chapel.net/",
      name: "<value>",
      slug: "<value>",
      namespace: "<value>",
      owner: {
        id: 8820.56,
        name: "<value>",
      },
      ownerType: "user",
      private: false,
      defaultBranch: "<value>",
      updatedAt: 2123.21,
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `gitAccount`                                 | [models.GitAccount](../models/gitaccount.md) | :heavy_check_mark:                           | N/A                                          |
| `repos`                                      | [models.Repos](../models/repos.md)[]         | :heavy_check_mark:                           | N/A                                          |