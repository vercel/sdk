# CreateProjectGitSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { CreateProjectGitSources } from "@vercel/sdk/models/createprojectcontenthint8.js";

let value: CreateProjectGitSources = {
  enabled: true,
  environments: [],
  sources: [
    {
      org: "<value>",
      provider: "bitbucket",
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `enabled`                                    | *boolean*                                    | :heavy_check_mark:                           | N/A                                          |
| `environments`                               | *models.CreateProjectProjectsEnvironments*[] | :heavy_check_mark:                           | N/A                                          |
| `sources`                                    | *models.CreateProjectProjectsSources*[]      | :heavy_check_mark:                           | N/A                                          |