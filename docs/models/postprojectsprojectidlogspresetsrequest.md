# PostProjectsProjectIdLogsPresetsRequest

## Example Usage

```typescript
import { PostProjectsProjectIdLogsPresetsRequest } from "@vercel/sdk/models/postprojectsprojectidlogspresetsop.js";

let value: PostProjectsProjectIdLogsPresetsRequest = {
  projectId: "<id>",
  requestBody: {
    query:
      "timeline=past30Minutes&startDate=1690446214407&endDate=1690448014407&levels=info&domains=vercel.com",
    title: "Request Path",
    group: "team",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | projectId of the preset                                                                                        |
| `requestBody`                                                                                                  | [models.PostProjectsProjectIdLogsPresetsRequestBody](../models/postprojectsprojectidlogspresetsrequestbody.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |