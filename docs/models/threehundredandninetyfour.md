# ThreeHundredAndNinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyFour } from "@vercel/sdk/models/threehundredandsixtyseven.js";

let value: ThreeHundredAndNinetyFour = {
  projectId: "<id>",
  projectName: "<value>",
  repositoryName: "<value>",
  removedTeamIds: [],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `repositoryName`   | *string*           | :heavy_check_mark: | N/A                |
| `removedTeamIds`   | *string*[]         | :heavy_check_mark: | N/A                |