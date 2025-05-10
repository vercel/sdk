# PostProjectsProjectIdLogsPresetsRequestBody

## Example Usage

```typescript
import { PostProjectsProjectIdLogsPresetsRequestBody } from "@vercel/sdk/models/postprojectsprojectidlogspresetsop.js";

let value: PostProjectsProjectIdLogsPresetsRequestBody = {
  query:
    "timeline=past30Minutes&startDate=1690446214407&endDate=1690448014407&levels=info&domains=vercel.com",
  title: "Request Path",
  group: "personal",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `query`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | query parameter for saved filter preset                                                             | timeline=past30Minutes&startDate=1690446214407&endDate=1690448014407&levels=info&domains=vercel.com |
| `title`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | The title of the preset                                                                             | Request Path                                                                                        |
| `group`                                                                                             | [models.PostProjectsProjectIdLogsPresetsGroup](../models/postprojectsprojectidlogspresetsgroup.md)  | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |