# ReadFileRequest

## Example Usage

```typescript
import { ReadFileRequest } from "@vercel/sdk/models/readfileop.js";

let value: ReadFileRequest = {
  sandboxId: "sbx_abc123",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `sandboxId`                                                    | *string*                                                       | :heavy_check_mark:                                             | The unique identifier of the sandbox to read the file from.    | sbx_abc123                                                     |
| `teamId`                                                       | *string*                                                       | :heavy_minus_sign:                                             | The Team identifier to perform the request on behalf of.       | team_1a2b3c4d5e6f7g8h9i0j1k2l                                  |
| `slug`                                                         | *string*                                                       | :heavy_minus_sign:                                             | The Team slug to perform the request on behalf of.             | my-team-url-slug                                               |
| `requestBody`                                                  | [models.ReadFileRequestBody](../models/readfilerequestbody.md) | :heavy_minus_sign:                                             | N/A                                                            |                                                                |