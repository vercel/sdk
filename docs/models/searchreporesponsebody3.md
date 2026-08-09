# SearchRepoResponseBody3

## Example Usage

```typescript
import { SearchRepoResponseBody3 } from "@vercel/sdk/models/searchrepoop.js";

let value: SearchRepoResponseBody3 = {
  gitAccount: {
    provider: "<value>",
    namespaceId: "<id>",
  },
  repos: [],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `gitAccount`                                 | [models.GitAccount](../models/gitaccount.md) | :heavy_check_mark:                           | N/A                                          |
| `repos`                                      | [models.Repos](../models/repos.md)[]         | :heavy_check_mark:                           | N/A                                          |