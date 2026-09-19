# FourHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortySix } from "@vercel/sdk/models/fourhundredandten.js";

let value: FourHundredAndFortySix = {
  projectId: "<id>",
  projectName: "<value>",
  removedTeamIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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