# ResponseBodyGitSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { ResponseBodyGitSources } from "@vercel/sdk/models/getprojectsresponsebodyprojectsconsolidatedgitcommitstatus.js";

let value: ResponseBodyGitSources = {
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

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `enabled`                                              | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |
| `environments`                                         | *models.GetProjectsResponseBodyProjectsEnvironments*[] | :heavy_check_mark:                                     | N/A                                                    |
| `sources`                                              | *models.GetProjectsResponseBodySources*[]              | :heavy_check_mark:                                     | N/A                                                    |