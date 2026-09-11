# TwoHundredAndSeventyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyFive } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndSeventyFive = {
  projectId: "<id>",
  projectName: "<value>",
  consolidatedGitCommitStatus: {
    enabled: true,
    propagateFailures: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `consolidatedGitCommitStatus`                                                  | [models.ConsolidatedGitCommitStatus](../models/consolidatedgitcommitstatus.md) | :heavy_check_mark:                                                             | N/A                                                                            |