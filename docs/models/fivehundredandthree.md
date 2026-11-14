# FiveHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThree } from "@vercel/sdk/models/fourhundredandeightyseven.js";

let value: FiveHundredAndThree = {
  projectId: "<id>",
  projectName: "<value>",
  removedTeamIds: [],
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