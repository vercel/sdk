# ThreeHundredAndSeventyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyFive } from "@vercel/sdk/models/threehundredandfortyone.js";

let value: ThreeHundredAndSeventyFive = {
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