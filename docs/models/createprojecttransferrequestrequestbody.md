# CreateProjectTransferRequestRequestBody

## Example Usage

```typescript
import { CreateProjectTransferRequestRequestBody } from "@vercel/sdk/models/createprojecttransferrequestop.js";

let value: CreateProjectTransferRequestRequestBody = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `callbackUrl`                                                   | *string*                                                        | :heavy_minus_sign:                                              | The URL to send a webhook to when the transfer is accepted.     |
| `callbackSecret`                                                | *string*                                                        | :heavy_minus_sign:                                              | The secret to use to sign the webhook payload with HMAC-SHA256. |