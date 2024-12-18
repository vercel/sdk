# UpdateRecordRequest

## Example Usage

```typescript
import { UpdateRecordRequest } from "@vercel/sdk/models/updaterecordop.js";

let value: UpdateRecordRequest = {
  recordId: "rec_2qn7pzrx89yxy34vezpd31y9",
  requestBody: {
    name: "example-1",
    value: "google.com",
    type: "A",
    ttl: 60,
    srv: {
      target: "example2.com.",
      weight: 131576,
      port: 48519,
      priority: 821016,
    },
    https: {
      priority: 373054,
      target: "example2.com.",
    },
    comment: "used to verify ownership of domain",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `recordId`                                                             | *string*                                                               | :heavy_check_mark:                                                     | The id of the DNS record                                               | rec_2qn7pzrx89yxy34vezpd31y9                                           |
| `teamId`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | The Team identifier to perform the request on behalf of.               |                                                                        |
| `slug`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | The Team slug to perform the request on behalf of.                     |                                                                        |
| `requestBody`                                                          | [models.UpdateRecordRequestBody](../models/updaterecordrequestbody.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |