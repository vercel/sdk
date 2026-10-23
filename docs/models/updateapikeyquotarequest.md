# UpdateApiKeyQuotaRequest

## Example Usage

```typescript
import { UpdateApiKeyQuotaRequest } from "@vercel/sdk/models/updateapikeyquotaop.js";

let value: UpdateApiKeyQuotaRequest = {
  apiKeyID: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `apiKeyID`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the API key whose quota should be updated.                             |
| `requestBody`                                                                    | [models.UpdateApiKeyQuotaRequestBody](../models/updateapikeyquotarequestbody.md) | :heavy_minus_sign:                                                               | N/A                                                                              |