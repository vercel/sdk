# UpdateApiKeyQuotaResponseBody

Successfully updated the API key quota.

## Example Usage

```typescript
import { UpdateApiKeyQuotaResponseBody } from "@vercel/sdk/models/updateapikeyquotaop.js";

let value: UpdateApiKeyQuotaResponseBody = {
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
  quota: {
    quotaEntityId: "<id>",
    limitAmount: 5184.96,
    currentSpend: 4317.6,
    currentByokSpend: 2123.25,
    includeByokInQuota: true,
    refreshPeriod: "<value>",
    active: false,
    archived: false,
    createdAt: 6692.13,
    updatedAt: 2467.13,
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `apiKey`                                       | [models.APIKey](../models/apikey.md)           | :heavy_check_mark:                             | Represents an API key.                         |
| `quota`                                        | [models.APIKeyQuota](../models/apikeyquota.md) | :heavy_check_mark:                             | AI Gateway quota associated with an API key.   |