# FourHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirteen } from "@vercel/sdk/models/threehundredandninetytwo.js";

let value: FourHundredAndThirteen = {
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