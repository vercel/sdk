# ThreeHundredAndEightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyEight } from "@vercel/sdk/models/threehundredandsixtytwo.js";

let value: ThreeHundredAndEightyEight = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  removedTeamIds: [
    "<value 1>",
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