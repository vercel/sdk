# RecordEventsRequest

## Example Usage

```typescript
import { RecordEventsRequest } from "@vercel/sdk/models/recordeventsop.js";

let value: RecordEventsRequest = {
  xArtifactClientCi: "VERCEL",
  xArtifactClientInteractive: 0,
  requestBody: [
    {
      sessionId: "<id>",
      source: "LOCAL",
      event: "MISS",
      hash: "12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
      duration: 400,
    },
  ],
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `xArtifactClientCi`                                                                   | *string*                                                                              | :heavy_minus_sign:                                                                    | The continuous integration or delivery environment where this artifact is downloaded. | VERCEL                                                                                |
| `xArtifactClientInteractive`                                                          | *number*                                                                              | :heavy_minus_sign:                                                                    | 1 if the client is an interactive shell. Otherwise 0                                  | 0                                                                                     |
| `teamId`                                                                              | *string*                                                                              | :heavy_minus_sign:                                                                    | The Team identifier to perform the request on behalf of.                              |                                                                                       |
| `slug`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | The Team slug to perform the request on behalf of.                                    |                                                                                       |
| `requestBody`                                                                         | [models.RequestBody](../models/requestbody.md)[]                                      | :heavy_check_mark:                                                                    | N/A                                                                                   |                                                                                       |