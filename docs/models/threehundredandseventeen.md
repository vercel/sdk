# ThreeHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventeen } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: ThreeHundredAndSeventeen = {
  consolidatedGitCommitStatus: {
    enabled: true,
    propagateFailures: false,
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