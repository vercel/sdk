# ResponseBody4

## Example Usage

```typescript
import { ResponseBody4 } from "@vercel/sdk/models/searchrepoop.js";

let value: ResponseBody4 = {
  gitAccount: {
    namespaceId: 9173.09,
    provider: "github",
  },
  repos: [],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `gitAccount`                                                         | [models.ResponseBodyGitAccount](../models/responsebodygitaccount.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `repos`                                                              | [models.ResponseBodyRepos](../models/responsebodyrepos.md)[]         | :heavy_check_mark:                                                   | N/A                                                                  |