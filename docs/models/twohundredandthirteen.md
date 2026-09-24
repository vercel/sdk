# TwoHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirteen } from "@vercel/sdk/models/sourceimages.js";

let value: TwoHundredAndThirteen = {
  copiedDomains: [],
  enabledOrganizationEmu: true,
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