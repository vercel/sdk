# FourHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirty } from "@vercel/sdk/models/fourhundredandseven.js";

let value: FourHundredAndThirty = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  removedTeamIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `repositoryName`   | *string*           | :heavy_check_mark: | N/A                |
| `removedTeamIds`   | *string*[]         | :heavy_check_mark: | N/A                |