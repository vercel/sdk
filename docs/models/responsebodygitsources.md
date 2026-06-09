# ResponseBodyGitSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { ResponseBodyGitSources } from "@vercel/sdk/models/getprojectsresponsebodyfunctiondefaultmemorytype.js";

let value: ResponseBodyGitSources = {
  sources: [],
  enabled: true,
  environments: [
    {
      type: "system",
      target: "preview",
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `sources`                                      | *models.ResponseBodySources*[]                 | :heavy_check_mark:                             | N/A                                            |
| `enabled`                                      | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `environments`                                 | *models.GetProjectsResponseBodyEnvironments*[] | :heavy_check_mark:                             | N/A                                            |