# FiveHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFour } from "@vercel/sdk/models/usereventpayload491previous.js";

let value: FiveHundredAndFour = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
  sharedWithTeamSlug: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `projectId`          | *string*             | :heavy_check_mark:   | N/A                  |
| `projectName`        | *string*             | :heavy_check_mark:   | N/A                  |
| `repositoryName`     | *string*             | :heavy_check_mark:   | N/A                  |
| `sharedWithTeamId`   | *string*             | :heavy_check_mark:   | N/A                  |
| `sharedWithTeamSlug` | *string*             | :heavy_check_mark:   | N/A                  |