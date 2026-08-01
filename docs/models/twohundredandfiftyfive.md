# TwoHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyFive } from "@vercel/sdk/models/envid.js";

let value: TwoHundredAndFiftyFive = {
  projectId: "<id>",
  projectName: "<value>",
  consolidatedGitCommitStatus: {
    enabled: true,
    propagateFailures: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `consolidatedGitCommitStatus`                                                  | [models.ConsolidatedGitCommitStatus](../models/consolidatedgitcommitstatus.md) | :heavy_check_mark:                                                             | N/A                                                                            |