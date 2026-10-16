# FourHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyEight } from "@vercel/sdk/models/fourhundredandthirtyeight.js";

let value: FourHundredAndSixtyEight = {
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