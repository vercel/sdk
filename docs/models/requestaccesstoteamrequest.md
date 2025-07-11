# RequestAccessToTeamRequest

## Example Usage

```typescript
import { RequestAccessToTeamRequest } from "@vercel/sdk/models/requestaccesstoteamop.js";

let value: RequestAccessToTeamRequest = {
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  requestBody: {
    joinedFrom: {
      origin: "github",
      commitId: "f498d25d8bd654b578716203be73084b31130cd7",
      repoId: "67753070",
      repoPath: "jane-doe/example",
      gitUserId: 103053343,
      gitUserLogin: "jane-doe",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `teamId`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                        |
| `requestBody`                                                                        | [models.RequestAccessToTeamRequestBody](../models/requestaccesstoteamrequestbody.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |