# TwoHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndOne } from "@vercel/sdk/models/onehundredandfiftysix.js";

let value: TwoHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
  consolidatedGitCommitStatus: null,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `consolidatedGitCommitStatus`                                                  | [models.ConsolidatedGitCommitStatus](../models/consolidatedgitcommitstatus.md) | :heavy_check_mark:                                                             | N/A                                                                            |