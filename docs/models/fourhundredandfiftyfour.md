# FourHundredAndFiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyFour } from "@vercel/sdk/models/fourhundredandtwenty.js";

let value: FourHundredAndFiftyFour = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  sharedWithTeamId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `repositoryName`   | *string*           | :heavy_check_mark: | N/A                |
| `sharedWithTeamId` | *string*           | :heavy_check_mark: | N/A                |