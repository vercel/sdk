# OneHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThree } from "@vercel/sdk/models/usereventpayloadteam.js";

let value: OneHundredAndThree = {
  sha: "<value>",
  gitUserPlatform: "<value>",
  projectName: "<value>",
  gitCommitterName: "<value>",
  source: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `sha`                                                                | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `gitUserPlatform`                                                    | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `projectId`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `projectName`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `gitCommitterName`                                                   | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `source`                                                             | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `reason`                                                             | [models.UserEventPayloadReason](../models/usereventpayloadreason.md) | :heavy_minus_sign:                                                   | N/A                                                                  |