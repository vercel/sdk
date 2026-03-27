# UpdateSandboxRequest

## Example Usage

```typescript
import { UpdateSandboxRequest } from "@vercel/sdk/models/updatesandboxop.js";

let value: UpdateSandboxRequest = {
  name: "my-sandbox",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | The sandbox to update.                                                                                 | my-sandbox                                                                                             |
| `projectId`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The project ID that owns the named sandbox. When provided, takes precedence over OIDC project context. |                                                                                                        |
| `teamId`                                                                                               | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The Team identifier to perform the request on behalf of.                                               | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                          |
| `slug`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The Team slug to perform the request on behalf of.                                                     | my-team-url-slug                                                                                       |
| `requestBody`                                                                                          | [models.UpdateSandboxRequestBody](../models/updatesandboxrequestbody.md)                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |