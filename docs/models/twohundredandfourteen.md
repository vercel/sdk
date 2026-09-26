# TwoHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFourteen } from "@vercel/sdk/models/payloadspeedinsightsfree.js";

let value: TwoHundredAndFourteen = {
  copiedDomains: [
    "<value 1>",
  ],
  enabledOrganizationEmu: false,
  enabledTeamIds: [
    "<value 1>",
  ],
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