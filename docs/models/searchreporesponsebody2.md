# SearchRepoResponseBody2

## Example Usage

```typescript
import { SearchRepoResponseBody2 } from "@vercel/sdk/models/searchrepoop.js";

let value: SearchRepoResponseBody2 = {
  gitAccount: {
    provider: "github-custom-host",
    namespaceId: 2925.71,
  },
  repos: [
    {
      id: "<id>",
      provider: "gitlab",
      url: "https://lined-soybean.biz/",
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
      updatedAt: 5456.29,
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `gitAccount`                                 | [models.GitAccount](../models/gitaccount.md) | :heavy_check_mark:                           | N/A                                          |
| `repos`                                      | [models.Repos](../models/repos.md)[]         | :heavy_check_mark:                           | N/A                                          |