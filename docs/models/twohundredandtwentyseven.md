# TwoHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentySeven } from "@vercel/sdk/models/onehundredandseventytwo.js";

let value: TwoHundredAndTwentySeven = {
  copiedDomains: [
    "<value 1>",
  ],
  enabledOrganizationEmu: true,
  enabledTeamIds: [],
  organizationId: "<id>",
  teamId: "<id>",
  teamSlug: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `copiedDomains`          | *string*[]               | :heavy_check_mark:       | N/A                      |
| `enabledOrganizationEmu` | *boolean*                | :heavy_check_mark:       | N/A                      |
| `enabledTeamIds`         | *string*[]               | :heavy_check_mark:       | N/A                      |
| `organizationId`         | *string*                 | :heavy_check_mark:       | N/A                      |
| `teamId`                 | *string*                 | :heavy_check_mark:       | N/A                      |
| `teamSlug`               | *string*                 | :heavy_check_mark:       | N/A                      |