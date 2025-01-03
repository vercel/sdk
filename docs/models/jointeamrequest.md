# JoinTeamRequest

## Example Usage

```typescript
import { JoinTeamRequest } from "@vercel/sdk/models/jointeamop.js";

let value: JoinTeamRequest = {
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  requestBody: {
    inviteCode: "fisdh38aejkeivn34nslfore9vjtn4ls",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `teamId`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            | team_1a2b3c4d5e6f7g8h9i0j1k2l                                  |
| `requestBody`                                                  | [models.JoinTeamRequestBody](../models/jointeamrequestbody.md) | :heavy_check_mark:                                             | N/A                                                            |                                                                |