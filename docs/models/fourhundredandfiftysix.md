# FourHundredAndFiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftySix } from "@vercel/sdk/models/fourhundredandtwenty.js";

let value: FourHundredAndFiftySix = {
  projectId: "<id>",
  projectName: "<value>",
  removedTeamIds: [
    "<value 1>",
  ],
  repositoryName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `removedTeamIds`   | *string*[]         | :heavy_check_mark: | N/A                |
| `repositoryName`   | *string*           | :heavy_check_mark: | N/A                |