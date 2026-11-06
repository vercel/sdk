# ThreeHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyOne } from "@vercel/sdk/models/twohundredandseventythree.js";

let value: ThreeHundredAndTwentyOne = {
  consolidatedGitCommitStatus: {
    enabled: false,
    propagateFailures: true,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `consolidatedGitCommitStatus`                                                  | [models.ConsolidatedGitCommitStatus](../models/consolidatedgitcommitstatus.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |