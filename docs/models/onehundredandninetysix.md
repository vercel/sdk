# OneHundredAndNinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetySix } from "@vercel/sdk/models/microfrontends2.js";

let value: OneHundredAndNinetySix = {
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