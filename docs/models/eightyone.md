# EightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyOne } from "@vercel/sdk/models/usereventpayload70project.js";

let value: EightyOne = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `clientId`                                     | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `clientUid`                                    | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `clientName`                                   | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `projectId`                                    | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `installationId`                               | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `subjectType`                                  | [models.SubjectType](../models/subjecttype.md) | :heavy_minus_sign:                             | N/A                                            |
| `fields`                                       | *string*[]                                     | :heavy_minus_sign:                             | N/A                                            |
| `triggerDestinationCount`                      | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `tokenCount`                                   | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `acceptedTokenCount`                           | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `importedTokenCount`                           | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `tokensDeleted`                                | *number*                                       | :heavy_minus_sign:                             | N/A                                            |