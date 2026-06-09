# CreateProjectGitSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { CreateProjectGitSources } from "@vercel/sdk/models/createprojectresponsebody.js";

let value: CreateProjectGitSources = {
  sources: [],
  enabled: true,
  environments: [
    {
      type: "system",
      target: "production",
    },
  ],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `sources`                            | *models.CreateProjectSources*[]      | :heavy_check_mark:                   | N/A                                  |
| `enabled`                            | *boolean*                            | :heavy_check_mark:                   | N/A                                  |
| `environments`                       | *models.CreateProjectEnvironments*[] | :heavy_check_mark:                   | N/A                                  |