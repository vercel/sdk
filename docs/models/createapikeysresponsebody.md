# CreateApiKeysResponseBody

Successfully created an API key.

## Example Usage

```typescript
import { CreateApiKeysResponseBody } from "@vercel/sdk/models/createapikeysop.js";

let value: CreateApiKeysResponseBody = {
  apiKeyString: "uRKJSTt0L4RaSkiMj41QTkxM",
  apiKey: {
    id: "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
    name: "API Key for AI Gateway",
    partialKey: "t7V",
    teamId: "team_123a6c5209bc3778245d011443644c8d27dc2c50",
    purpose: "ai-gateway",
    projectId: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    expiresAt: 1632816536002,
    activeAt: 1632816536002,
    createdAt: 1632816536002,
    createdBy: "ZspSRT4ljIEEmMHgoDwKWDei",
    leakedAt: 1632816536002,
    leakedUrl: "https://favorite-folklore.org/",
    createdByAppId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  | Example                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `apiKeyString`                                                                                                                                               | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | The API key's actual value. This value is only provided in this response, and can never be retrieved again in the future. Be sure to save it somewhere safe! | uRKJSTt0L4RaSkiMj41QTkxM                                                                                                                                     |
| `apiKey`                                                                                                                                                     | [models.APIKey](../models/apikey.md)                                                                                                                         | :heavy_check_mark:                                                                                                                                           | Information about the newly created API key.                                                                                                                 |                                                                                                                                                              |