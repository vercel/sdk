# OneHundredAndEighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEighteen } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndEighteen = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `deletedUser`                                    | [models.DeletedUser](../models/deleteduser.md)   | :heavy_minus_sign:                               | N/A                                              |
| `deletedUid`                                     | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `githubUsername`                                 | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `gitlabUsername`                                 | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `bitbucketUsername`                              | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `directoryType`                                  | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `role`                                           | [models.PayloadRole](../models/payloadrole.md)   | :heavy_minus_sign:                               | N/A                                              |
| `reason`                                         | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `previousPlan`                                   | [models.PreviousPlan](../models/previousplan.md) | :heavy_minus_sign:                               | N/A                                              |
| `newPlan`                                        | [models.NewPlan](../models/newplan.md)           | :heavy_minus_sign:                               | N/A                                              |
| `automated`                                      | *boolean*                                        | :heavy_minus_sign:                               | N/A                                              |