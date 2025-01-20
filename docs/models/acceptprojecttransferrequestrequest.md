# AcceptProjectTransferRequestRequest

## Example Usage

```typescript
import { AcceptProjectTransferRequestRequest } from "@vercel/sdk/models/acceptprojecttransferrequestop.js";

let value: AcceptProjectTransferRequestRequest = {
  code: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
  requestBody: {
    newProjectName: "a-project-name",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | The code of the project transfer request.                                                              |                                                                                                        |
| `teamId`                                                                                               | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The Team identifier to perform the request on behalf of.                                               | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                          |
| `slug`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The Team slug to perform the request on behalf of.                                                     | my-team-url-slug                                                                                       |
| `requestBody`                                                                                          | [models.AcceptProjectTransferRequestRequestBody](../models/acceptprojecttransferrequestrequestbody.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |