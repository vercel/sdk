# CreateConditionalBypassRequest

## Example Usage

```typescript
import { CreateConditionalBypassRequest } from "@vercel/sdk/models/createconditionalbypassop.js";

let value: CreateConditionalBypassRequest = {
  projectId: "<id>",
  slug: "my-team-url-slug",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `projectId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `slug`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | my-team-url-slug                                                                             |
| `teamId`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | The Team identifier to perform the request on behalf of.                                     | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                |
| `requestBody`                                                                                | [models.CreateConditionalBypassRequestBody](../models/createconditionalbypassrequestbody.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |