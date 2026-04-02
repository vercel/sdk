# OneHundredAndSeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyFour } from "@vercel/sdk/models/usereventpayload162next.js";

let value: OneHundredAndSeventyFour = {
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