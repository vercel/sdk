# TwoHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFifty } from "@vercel/sdk/models/twohundredandfortyfive.js";

let value: TwoHundredAndFifty = {
  copiedDomains: [
    "<value 1>",
    "<value 2>",
  ],
  enabledOrganizationEmu: false,
  enabledTeamIds: [
    "<value 1>",
    "<value 2>",
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