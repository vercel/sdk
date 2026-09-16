# GetWebhooksResponseBody1

## Example Usage

```typescript
import { GetWebhooksResponseBody1 } from "@vercel/sdk/models/getwebhooksop.js";

let value: GetWebhooksResponseBody1 = {
  createdAt: 1567024758130,
  events: [
    "deployment.created",
  ],
  id: "account_hook_GflD6EYyo7F4ViYS",
  ownerId: "ZspSRT4ljIEEmMHgoDwKWDei",
  projectIds: [
    "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
  ],
  projectsMetadata: [],
  updatedAt: 1567024758130,
  url: "https://my-webhook.com",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `alertRuleIds`                                                                                           | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `createdAt`                                                                                              | *number*                                                                                                 | :heavy_check_mark:                                                                                       | A number containing the date when the webhook was created in in milliseconds                             | 1567024758130                                                                                            |
| `events`                                                                                                 | [models.ResponseBodyEvents](../models/responsebodyevents.md)[]                                           | :heavy_check_mark:                                                                                       | The webhooks events                                                                                      | deployment.created                                                                                       |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The webhook id                                                                                           | account_hook_GflD6EYyo7F4ViYS                                                                            |
| `ownerId`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The unique ID of the team the webhook belongs to                                                         | ZspSRT4ljIEEmMHgoDwKWDei                                                                                 |
| `projectIds`                                                                                             | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | The ID of the projects the webhook is associated with                                                    | [<br/>"prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB"<br/>]                                                           |
| `projectsMetadata`                                                                                       | [models.GetWebhooksResponseBodyProjectsMetadata](../models/getwebhooksresponsebodyprojectsmetadata.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `updatedAt`                                                                                              | *number*                                                                                                 | :heavy_check_mark:                                                                                       | A number containing the date when the webhook was updated in in milliseconds                             | 1567024758130                                                                                            |
| `url`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | A string with the URL of the webhook                                                                     | https://my-webhook.com                                                                                   |