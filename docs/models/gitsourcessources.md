# GitSourcesSources

## Example Usage

```typescript
import { GitSourcesSources } from "@vercel/sdk/models/updateprojectprojectsresponsebuildqueue.js";

let value: GitSourcesSources = {
  provider: "gitlab",
  org: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `provider`                                                   | [models.GitSourcesProvider](../models/gitsourcesprovider.md) | :heavy_check_mark:                                           | N/A                                                          |
| `org`                                                        | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `repo`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |