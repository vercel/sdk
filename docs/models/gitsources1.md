# GitSources1

## Example Usage

```typescript
import { GitSources1 } from "@vercel/sdk/models/updateprojectprojectspaths.js";

let value: GitSources1 = {
  enabled: false,
  environments: [
    {
      type: "system",
      target: "production",
    },
  ],
  sources: [
    {
      provider: "github",
      org: "<value>",
    },
  ],
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `enabled`                         | *boolean*                         | :heavy_check_mark:                | N/A                               |
| `environments`                    | *models.GitSourcesEnvironments*[] | :heavy_check_mark:                | N/A                               |
| `sources`                         | *models.GitSourcesSources*[]      | :heavy_check_mark:                | N/A                               |