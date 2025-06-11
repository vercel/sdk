# UpdateRecordRequest

## Example Usage

```typescript
import { UpdateRecordRequest } from "@vercel/sdk/models/updaterecordop.js";

let value: UpdateRecordRequest = {
  recordId: "rec_2qn7pzrx89yxy34vezpd31y9",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `recordId`                                                             | *string*                                                               | :heavy_check_mark:                                                     | The id of the DNS record                                               | rec_2qn7pzrx89yxy34vezpd31y9                                           |
| `teamId`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | The Team identifier to perform the request on behalf of.               | team_1a2b3c4d5e6f7g8h9i0j1k2l                                          |
| `slug`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | The Team slug to perform the request on behalf of.                     | my-team-url-slug                                                       |
| `requestBody`                                                          | [models.UpdateRecordRequestBody](../models/updaterecordrequestbody.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |